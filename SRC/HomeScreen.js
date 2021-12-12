import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'

const HomeScreen = ({navigation}) => {
    const [books, setBooks] = useState([])

    useEffect( async () => {
        // const data = await fetch('https://localhost:5000/get-all-books')
        // const response = data.json()
        // console.log(response)

        const {data} = await axios.get('http://localhost:5000/get-all-books')
        setBooks(data)
        console.log(data)

    }, [])

    return (
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

            {
                books.map( (book, Key) => (
                    <TouchableOpacity key={Key}  onPress= {() => {
                        navigation.navigate('bookInfo', {
                            bookName : book.name
                        })
                    }}>
                        <CardsExample bookName ={book.name} authorName ={book.author} bookPrice ={book.price} bookGenre ={book.genre} /> 
                    </TouchableOpacity>
                ))
             }
            
            {/* author: "xyz"
createdAt: 1639199583307
genre: "qweqweqwe"
name: "abc"
price: 120 */}
        </View>
    )
}

const CardsExample = ({bookName, authorName, bookPrice, bookGenre}) => {
    const cardStyle = { backgroundColor: "white", margin: "5px", padding: 20, minWidth: '200px', justifyContent:'center', alignItems:'center' }
    return (
      <View style={cardStyle}>
            <Text>Book NAME: {bookName}</Text>
            <Text>Author NAME: {authorName}</Text>
            <Text>Book Price: {bookPrice}</Text>
            <Text>Book Genre: {bookGenre}</Text>
      </View>
    )
  }

export default HomeScreen
