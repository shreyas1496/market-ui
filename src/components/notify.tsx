import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import firebase from "../firebase";

interface Props {
  setToken: (token: string) => void;
  className?: string;
}

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
  });
});

export const Notify: FunctionComponent<Props> = ({
  setToken,
}): ReactElement => {
  const permission = Notification.permission;
  const [enabled, setEnabled] = useState(permission === "granted");

  const onEnabled = useCallback(() => {
    messaging
      .getToken()
      .then((token) => {
        setEnabled(true);
        setToken(token);
      })
      .catch((err) => {
        console.log(err);
        setEnabled(false);
      });
  }, [setToken]);

  useEffect(() => {
    if (permission === "granted") {
      onEnabled();
    }
  }, [permission, onEnabled]);

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox checked={enabled} onChange={onEnabled} name="checkedA" />
        }
        label="Notifications"
      />
    </>
  );
};
