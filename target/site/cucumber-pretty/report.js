$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": " \t\t\tIn order to do Internet banking\n \t\t\tAs a para bank customer \n \t\t\tI want to Login successfully ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login succeful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am in the login page of the para bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a valid \u003cusername\u003e and \u003cpassword\u003e with \u003cuserFullName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userFullName"
      ]
    },
    {
      "cells": [
        "\"mahmoudtest\"",
        "\"123123\"",
        "\"test yyyy\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login succeful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am in the login page of the para bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_am_in_the_login_page_of_the_para_bank_Application() in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid \"mahmoudtest\" and \"123123\" with \"test yyyy\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_enter_a_valid_cridential(String,String,String) in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Login2.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": " \t\t\tIn order to do Internet banking\n \t\t\tAs a para bank customer \n \t\t\tI want to Login successfully ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login succeful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am in the login page of the para bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a valid \u003cusername\u003e and \u003cpassword\u003e with \u003cuserFullName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userFullName"
      ]
    },
    {
      "cells": [
        "\"mahmoudtest\"",
        "\"123123\"",
        "\"test yyyy\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login succeful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am in the login page of the para bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_am_in_the_login_page_of_the_para_bank_Application() in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid \"mahmoudtest\" and \"123123\" with \"test yyyy\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_enter_a_valid_cridential(String,String,String) in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.practise.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Gawish/eclipse-workspace/practise-cucumber/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});