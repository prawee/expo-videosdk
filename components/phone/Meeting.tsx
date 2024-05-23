import { View, Text } from 'react-native'
import React from 'react'
import { useMeeting } from '@videosdk.live/react-native-sdk'

const Meeting = () => {
    const { participants, meetingId } = useMeeting();
    console.log(`Meeting ${meetingId} is working...`, participants)
    const participantsArrId = [...participants.keys()]
    return (
        <View>
            <Text>Meeting {meetingId}</Text>
            {participantsArrId.map((participantId) => (
                <Text key={participantId}>{participantId}</Text>
            ))}
        </View>
    )
}

export default Meeting