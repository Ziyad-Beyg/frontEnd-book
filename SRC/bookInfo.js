import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { View, Text } from 'react-native'


const bookInfo = ({route}) => {

    // const {bookName} = route.params;
    const [book, setBook] = useState([])


    useEffect( async () => {
        // const {data} = await axios.get(`http://localhost:5000/get-one-book/${bookName}`)
        // setBook(data)
        // console.log(data)

    }, [])

    return (
        <View>
            <Text>HELLO SINGLE BOOK</Text>
        </View>
    )
}

export default bookInfo
