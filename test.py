# -*- coding: utf-8 -*-
import re

REGEX="^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"

valid_emails=[
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

strange_valid_emails=[
    "much.“more\ unusual”@example.com",
    "very.unusual.“@”.unusual.com@example.com",
    "very.“(),:;<>[]”.VERY.“very@\\ \"very”.unusual@strange.example.com"
    ]

invalid_emails=[
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

strange_invalid_emails=[
    "“(),:;<>[\]@example.com",
    "just\"not\"right@example.com",
    "this\ is\"really\"not\allowed@example.com",
    ]

def test_valid_emails():
  for email in valid_emails:
    if not re.compile(REGEX).match(email) :
      print(f"{ email } should be valid email but regex fails.")

def test_strange_valid_emails():
  for email in strange_valid_emails:
    if not re.compile(REGEX).match(email) :
      print(f"{ email } should be valid email but regex fails.")

def test_invalid_emails():
  for email in invalid_emails:
    if re.compile(REGEX).match(email) :
      print(f"{ email } should be invalid email but regex fails.")

def test_strange_invalid_emails():
  for email in strange_invalid_emails:
    if re.compile(REGEX).match(email) :
      print(f"{ email } should be invalid email but regex fails.")

test_valid_emails()
test_strange_valid_emails()
test_invalid_emails()
test_strange_invalid_emails()
