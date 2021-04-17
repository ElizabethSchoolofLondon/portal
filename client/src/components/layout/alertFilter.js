export function alertPass(alerts) {
  const arr = alerts.filter(
    (alert) => alert.id === 'pwdNotMatch' || 'pwdShort' || 'loginError'
  )
  return arr
}
