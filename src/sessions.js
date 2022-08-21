import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { BiTimeFive } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";

export default function Sessions({navigation}) {

  //TODO: use the user data to get his sessions specifically
  const [sessions, setSessions] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.error(err));
  }, []);

//   function getEvaluation(arr) {
//     if (!arr || arr.length == 0)
//       return {
//         eval_previous: 0,
//         eval_current: 0,
//         notes: "",
//       };
//     let evaluation = arr.find((evalu) => evalu.student == user._id);
//     return {
//       eval_previous: evaluation.previously_eval,
//       eval_current: evaluation.current_eval,
//       notes: evaluation.notes,
//     };
//   }

  return (
    <View>
      <Text style={{fontSize: 32, fontWeight: 500,textAlign: "center",marginTop: 16 }}>Sessions</Text>
      <ScrollView>
        
      {sessions?.map((session) => {
            //   let { notes, eval_current, eval_previous } = getEvaluation(
            //     session.evaluations
            //   );
            
            //Date Change

            let date = new Date(session.created_at);
            let dateClearified = date.toLocaleString("default", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            let time = date.toLocaleString("default", {
              minute: "numeric",
              hour: "numeric",
            });

              return (
                <Pressable onPress={()=> navigation.navigate('room', { session: session })} key={session._id}>
                  <Card style={{overflow: 'hidden', position: 'relative'}}>
                    <Text style={{color: 'white', backgroundColor:session.is_live ? 'green':'grey'  ,padding: 6 ,position:'absolute', top: 0,right: 0, borderRadius: 4,fontSize: 16}}>{session.is_live ?'Live':'Ended'}</Text>
                    <Text style={{fontWeight: 700, fontSize: 16}}>Sheikh</Text><Text style={{fontSize: 24}}>{session.created_by.name}</Text>
                    {/* <Text>Surah: {session.created_at}</Text> */}
                    
                  <View
                    style={{ justifyContent: "flex-end", alignItems: "center", flexDirection: 'row'}}
                  >
                    <MdDateRange /> {dateClearified}{" "}
                    <BiTimeFive style={{ marginLeft: 16 }} /> {time}
                  </View>

                    {/* <Text>Date: {dateClearified} {time}</Text> */}
                    {/* <Text>eval_current: {eval_current}</Text>
                    <Text>eval_previous: {eval_previous}</Text>
                    <Text>notes: {notes}</Text> */}
                  </Card>
                </Pressable>
              )
            })}
        
            
        {sessions?.length == 0 ? (
          <Text
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: 24,
            }}
          >
            No sessions yet
          </Text>
        ) : (
          <>
          <Text></Text>
          </>
        )}
      </ScrollView>
    </View>
  );
}
