import { React, useState } from 'react'
import { View, Text} from 'react-native'
import * as Progress from 'react-native-progress'

export default function ProgressBar() {
    const [progress, setProgress] = useState(1 / 6);

    const incrementProgress = () => {
        setProgress(progress + 1 / 6)
        return true;
    }

    return (
        <Progress.Bar progress={progress} width={200} color="white" />
    )
}
