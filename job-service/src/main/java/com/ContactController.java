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

    @PostMapping("")
    public Contact create(@RequestBody Contact contact) {
        return this.repository.save(contact);
    }

    @PatchMapping("/{id}")
    public Contact update(@RequestBody Contact contact, @PathVariable Long id) {
        Contact existingContact = this.repository.findOne(id);
        if (contact.getTitle() != null) {
            existingContact.setTitle(contact.getTitle());
        }
        if (contact.getFirstName() != null) {
            existingContact.setFirstName(contact.getFirstName());
        }
        if (contact.getLastName() != null) {
            existingContact.setLastName(contact.getLastName());
        }
        if (contact.getPhone() != null) {
            existingContact.setPhone(contact.getPhone());
        }
        if (contact.getEmail() != null) {
            existingContact.setEmail(contact.getEmail());
        }
        if (contact.getNote() != null) {
            existingContact.setNote(contact.getNote());
        }
        if (contact.getTitle() != null) {
            existingContact.setTitle(contact.getTitle());
        }
        return this.repository.save(existingContact);
    }



}