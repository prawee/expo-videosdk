export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlZTg3MTJjMy01ZjczLTQwZDktYmExYi0wNTAyY2UwNWMxODciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNjI2Njk2NCwiZXhwIjoxODc0MDU0OTY0fQ.Vmzn3pOuhNdEgkKNxE20phYZVYmD3FCWAIEduvinVmw';
export const createMeeting = async (token: any) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
        };
        const meetingId = await fetch(`https://api.videosdk.live/v2/rooms`, options)
        .then(async (result) => {
            const { roomId } = await result.json();
            return roomId;
        })
        .catch((error) => console.log("error", error));
        return meetingId;
    } catch (e) {
        console.log(e);
    }
}

export const defaultMeetingId = 'sj56-pm0a-1wj7'