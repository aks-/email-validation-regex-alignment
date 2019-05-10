const REGEX=/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validEmails=[
  "email@example.com",
  "firstname.lastname@example.com",
  "email@subdomain.example.com",
  "firstname+lastname@example.com",
  "email@123.123.123.123",
  "email@[123.123.123.123]",
  "“email”@example.com",
  "1234567890@example.com",
  "email@example-one.com",
  "_______@example.com",
  "email@example.name",
  "email@example.museum",
  "email@example.co.jp",
  "firstname-lastname@example.com",
]

const strangeValidEmails=[
  "much.“more\\ unusual”@example.com",
  "very.unusual.“@”.unusual.com@example.com",
  "very.“(),:;<>[]”.VERY.“very@\\ \"very”.unusual@strange.example.com"
]

const invalidEmails=[
  "plainaddress",
  "#@%^%#$@#$@#.com",
  "@example.com",
  "Joe Smith <email@example.com>",
  "email.example.com",
  "email@example@example.com",
  ".email@example.com",
  "email.@example.com",
  "email..email@example.com",
  "あいうえお@example.com",
  "email@example.com (Joe Smith)",
  "email@example",
  "email@-example.com",
  "email@example.web",
  "email@111.222.333.44444",
  "email@example..com",
  "Abc..123@example.com",
]

const strangeInvalidEmails=[
  "“(),:;<>[\]@example.com",
  "just\"not\"right@example.com",
  "this\ is\"really\"not\allowed@example.com",
]

function testValidEmails() {
  validEmails.forEach(email => {
    if (!REGEX.test(email)) {
      console.log(`${email} should be valid email but regex fails.`)
    }
  })
}

function testStrangeValidEmails() {
  strangeValidEmails.forEach(email => {
    if (!REGEX.test(email)) {
      console.log(`${email} should be valid email but regex fails.`)
    }
  })
}

function testInvalidEmails () {
  invalidEmails.forEach(email => {
    if (REGEX.test(email)) {
      console.log(`${email} should be invalid email but regex fails.`)
    }
  })
}

function testStrangeInvalidEmails () {
  strangeInvalidEmails.forEach(email => {
    if (REGEX.test(email)) {
      console.log(`${email} should be invalid email but regex fails.`)
    }
  })
}

testValidEmails()
testStrangeValidEmails()
testInvalidEmails()
testStrangeInvalidEmails()
