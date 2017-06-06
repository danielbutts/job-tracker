package com;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    private final ContactRepository repository;

    public ContactController(ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Contact> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public Contact create(@RequestBody Contact contact) {
        return this.repository.save(contact);
    }

}