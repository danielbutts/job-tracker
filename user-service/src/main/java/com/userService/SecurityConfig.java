package com.userService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

//https://spring.io/guides/gs/securing-web/
//https://stackoverflow.com/questions/39977307/spring-api-rest-and-cors-and-angularjs
//https://docs.spring.io/spring-security/site/docs/current/reference/html/csrf.html

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/users", "/users/*")
                .permitAll()
//                .anyRequest().authenticated()
                .anyRequest().fullyAuthenticated().and().httpBasic().and().csrf().disable()
//                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    //Need to modify auth method chain to check the database as opposed to inMemoryAuth
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .inMemoryAuthentication()
            .withUser("user").password("password").roles("USER");
    }
}

