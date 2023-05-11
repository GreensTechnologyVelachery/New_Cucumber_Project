package com.rerun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\VISHAL\\New\\Cucumber_11am\\src\\test\\resources\\failed.txt" ,
                 glue="org.stepdefinition" ,
                 monochrome = true)
public class TestReRunner {

}
