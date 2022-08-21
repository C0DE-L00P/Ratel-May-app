import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";

//TODO: make use of env (BTW in react it's not straight forward)
export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);
  
  //TODO: make the card prettier
  return (
    <ScrollView>
      {events?.map((event) => {
        return (
          <Card key={event.title + event.date}>
            <Image />
            <Text>{event.title}  -------</Text>
            <Text>{event.content}</Text>
          </Card>
        );
      })}
    </ScrollView>
  );
}
