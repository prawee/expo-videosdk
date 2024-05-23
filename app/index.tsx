import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-native-sdk";
import { token, createMeeting, defaultMeetingId } from "@/services/api";
import Meeting from "@/components/phone/Meeting";
import Call from "@/components/phone/Call";

export default function App() {
  const [meetingId, setMeetingId] = useState(null);

  useEffect(() => {
    console.log('app start...', meetingId)
    if (!token || token === null) {
      console.log('please provide TOKEN in services/api.tsx')
    }

    if (meetingId == null) {
      console.log('create meeting room...')
      createMeeting(token).then((meetingId) => {
        // console.log('meetingId', meetingId)
        setMeetingId(meetingId)
      })
    }
  })

  console.log('meetingId', meetingId)
  console.log('useMeeting ', useMeeting)

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
            multiStream: true
          }}
          token={token}
          joinWithoutUserInteraction
        >
          <Meeting />
        </MeetingProvider>
      ) : (
        <Call />
      )}
      
    </SafeAreaView>
  )
}
