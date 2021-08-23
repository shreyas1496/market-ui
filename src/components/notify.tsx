import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, {FunctionComponent, ReactElement, useCallback, useState} from "react";
import firebase from '../firebase';

interface Props {
    className?: string
}

const messaging = firebase.messaging()

export const Notify: FunctionComponent<Props> = (): ReactElement => {

    const [enabled, setEnabled] = useState(false);
    const [token, setToken] = useState('');

    const onEnabled = useCallback(() => {
        messaging.getToken().then(token=>{
            setEnabled(true);
            setToken(token)
          }).catch((err)=>{
            console.log(err);
            setEnabled(false);
          })
    }, [])

    return (
        <>
        <FormControlLabel
        control={<Checkbox checked={enabled} onChange={onEnabled} name="checkedA" />}
        label="Notifications"
      />
      <div>{token}</div>
      </>
    )

}