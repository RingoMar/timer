---
sidebar_position: 1
---
# Editing Timestamp using Video on Demand

# Specify a Timestamp
Users can specify a timestamp by appending `?time=`timestamp`` to the URL in the address bar of their web browser / Browser Source. They should replace `timestamp` with the desired timestamp in `ISO 8601 format` (e.g., 2024-03-29T22:00:33Z).

# How to find a VOD timestamp using the FFZ Extension Debug
1. Navigate to desired Vod page (e.g., https://www.twitch.tv/videos/2000000000)
2. Open the FFZ Control Center & Scroll down to "GraphQL" under the *Debugging* tab
![image](https://github.com/RingoMar/timer/assets/28763332/b30db70b-099a-4f21-9196-b25492c51b7f)

3. Click on the *Query* dropdown and change it to "VideoMetadata" 
![image](https://github.com/RingoMar/timer/assets/28763332/39825059-3102-45e9-b451-c97695968d4e)

4. In the results scroll down and look for the "createdAt" value and copy the timestamp 
![image](https://github.com/RingoMar/timer/assets/28763332/6f09922e-0a55-4e23-a54f-9c80f3feb0f7)

_Now, you can utilize this value as the starting point for your timer, enabling it to continuously count up until you decide to adjust the time._

```
https://ringomar.github.io/timer/?time=2024-03-29T22:00:33Z
```