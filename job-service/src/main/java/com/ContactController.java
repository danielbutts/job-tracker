package com;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacts")
@CrossOrigin
public class ContactController {

    private final ContactRepository repository;

    public ContactController(ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Contact> all() {
        return this.repository.findAll();
    }

    @GetMapping("/{id}")
    public Contact getIndividualContact(@PathVariable("id") Long id) {return this.repository.findOne(id);}

//    @GetMapping("/company/{id}")
//    public Contact getContactFromCompId( Company company,@PathVariable("id") Long id) {
//        System.out.println(id);
////        System.out.println(this.repository.findOne(id));
////        if (this.repository == id) {
//            return this.repository.Company.findOne(id);
////        }
//    }


    @PostMapping("")
    public Contact create(@RequestBody Contact contact) {
        return this.repository.save(contact);
    }

}