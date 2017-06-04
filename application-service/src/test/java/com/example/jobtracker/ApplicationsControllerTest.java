package com.example.jobtracker;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by danielbutts on 6/3/17.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(ApplicationsController.class)
public class ApplicationsControllerTest {

    @Autowired
    MockMvc mvc;

    @Test
    public void testGetAllApplications() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/apps");


        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(content().json("{ \"apps\": [] }"));
    }
}
