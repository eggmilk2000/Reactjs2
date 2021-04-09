
interface NotificationList {
  Notifications: string[];
}

export function Noti(props: NotificationList) {
  const { Notifications } = props;
  return (
    <div className="container">
      <div className="noti-header text-uppercase text-muted">Notifications</div>
      <div className="noti-text">Control your notification and auto-follow settings.</div>
      <div className="noti-box form-check form-switch col-lg-3 col-md-3">
        {Notifications.map(item => (
          <>
            <div className="noti-info">
              <label className="form-check-label fw-bold">{item} </label>
              <label className="form-check-label">commits data and history </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            </div>
          </>

        ))}
      </div>
    </div>
  )
}