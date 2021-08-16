function censorString(string) {
  if (string.length < 3) {
    return string
  }

  return string[0] + "*".repeat(string.length - 2) + string[string.length - 1]
}

function censorEmail(email) {
  const parts = email.split("@")
  const identifier = parts[0]
  const [domainName, ext] = parts[1].split(".")

  parts[0] = censorString(identifier)
  parts[1] = censorString(domainName) + "." + ext

  return parts.join("@")
}

function toSentenceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export { toSentenceCase, censorEmail }
