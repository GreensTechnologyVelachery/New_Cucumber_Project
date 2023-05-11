$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/01_FbFacebook.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the url of the fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Sample.user_has_to_launch_the_url_of_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid username in email field",
  "keyword": "When "
});
formatter.match({
  "location": "Sample.user_has_to_pass_the_invalid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Sample.user_has_to_pass_the_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Sample.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Whether user able to see the error page",
  "keyword": "And "
});
formatter.match({
  "location": "Sample.whether_user_able_to_see_the_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate login with bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "To pass the positive and negative \"\u003cemaildata\u003e\" usernames in email field",
  "keyword": "And "
});
formatter.step({
  "name": "To pass the \"\u003cpassworddata\u003e\" positive and negative password in password field",
  "keyword": "And "
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildata",
        "passworddata"
      ]
    },
    {
      "cells": [
        "java@gmail.com",
        "java@123"
      ]
    },
    {
      "cells": [
        "sel@gmail.com",
        "sel@123"
      ]
    },
    {
      "cells": [
        "python@gmail.com",
        "python@123"
      ]
    },
    {
      "cells": [
        "sql@gmail.com",
        "sql@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login with bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.to_launch_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the positive and negative \"java@gmail.com\" usernames in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_usernames_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the \"java@123\" positive and negative password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.to_launch_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the positive and negative \"sel@gmail.com\" usernames in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_usernames_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the \"sel@123\" positive and negative password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.to_launch_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the positive and negative \"python@gmail.com\" usernames in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_usernames_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the \"python@123\" positive and negative password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.to_launch_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the positive and negative \"sql@gmail.com\" usernames in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_usernames_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the \"sql@123\" positive and negative password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_pass_the_positive_and_negative_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/02_AmAmazon.feature");
formatter.feature({
  "name": "To validate the signin functionality of amazon application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Endtoend"
    }
  ]
});
formatter.scenario({
  "name": "To validate signin with invalid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Endtoend"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sample"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.to_launch_the_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid email in email field",
  "rows": [
    {
      "cells": [
        "emailone",
        "sql@gmail.com"
      ]
    },
    {
      "cells": [
        "emailtwo",
        "java@gmail.com"
      ]
    },
    {
      "cells": [
        "emailthree",
        "python@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_pass_invalid_email_in_email_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid password in password field",
  "rows": [
    {
      "cells": [
        "passwordone",
        "passwordtwo"
      ]
    },
    {
      "cells": [
        "aws@123",
        "java@123"
      ]
    },
    {
      "cells": [
        "4565432",
        "sel@123"
      ]
    },
    {
      "cells": [
        "python@113",
        "y32345754"
      ]
    },
    {
      "cells": [
        "576543",
        "sql@123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.toPassTheInvalidPasswordInPasswordField(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.toClickTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});