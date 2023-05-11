package org.stepdefinition;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.repo.ReportJvm;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources", 
                 glue="org.stepdefinition" ,
                 monochrome=true ,
                 dryRun=false ,
                 snippets=SnippetType.CAMELCASE ,
                 plugin= {"html:target" , "junit:JUnitRepo\\xmlreport.xml" , "json:JsonRepo\\repo.json" ,
                		 "rerun:src\\test\\resources\\failed.txt"}) 
public class TestRunnerClass {

	@AfterClass
	public static void post() {

		ReportJvm.jvmRepo("C:\\Users\\VISHAL\\New\\Cucumber_11am\\JsonRepo\\repo.json");
	}
	
}
