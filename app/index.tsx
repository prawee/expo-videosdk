import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { MeetingProvider } from "@videosdk.live/react-native-sdk";
import { token, createMeeting, defaultMeetingId } from "@/services/api";

export default function App() {
  const [meetingId, setMeetingId] = useState(defaultMeetingId);

  useEffect(() => {
    console.log('app start...', meetingId)
    if (!token || token === null) {
      console.log('please provide TOKEN in services/api.tsx')
    }

    if (meetingId == null) {
      console.log('create meeting room...')
      createMeeting(token).then((meetingId) => {
        setMeetingId(meetingId)
        // console.log('meetingId', meetingId)
      })
    }
  })

  console.log('meetingId', meetingId)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF', justifyContent: 'center', alignItems: 'center'}}>
      {meetingId ? (
        <MeetingProvider
          config={{
            meetingId,
            name: 'Demo Meeting',
            micEnabled: true,
            webcamEnabled: true,
            participantId: "demo",
            multiStream: false
          }}
          token={token}
          joinWithoutUserInteraction={false}
        >
          <Text>Room {`${meetingId}`}</Text>
        </MeetingProvider>
      ) : (
        <Text>Home</Text>
      )}
      
    </SafeAreaView>
  )
}
