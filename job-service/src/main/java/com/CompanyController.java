package com;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/companies")
@CrossOrigin
public class CompanyController {

    private final CompanyRepository companyRepository;
    private final JobRepository jobRepository;

    public CompanyController(CompanyRepository companyRepository, JobRepository jobRepository) {
        this.companyRepository = companyRepository;
        this.jobRepository = jobRepository;
    }

    @GetMapping("")
    public Iterable<Company> all() {
        return this.companyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Company getIndividualContact(@PathVariable("id") Long id) {return this.companyRepository.findOne(id);}

    @PostMapping("")
    public Company create(@RequestBody Company company) {
        return this.companyRepository.save(company);
    }

    @PatchMapping("/{id}")
    public Company update(@RequestBody Company company, @PathVariable Long id) {
        Company existingCompany = this.companyRepository.findOne(id);
        if (company.getName() != null) {
            existingCompany.setName(company.getName());
        }
        if (company.getCity() != null) {
            existingCompany.setCity(company.getCity());
        }
        if (company.getState() != null) {
            existingCompany.setState(company.getState());
        }
        if (company.getNote() != null) {
            existingCompany.setNote(company.getNote());
        }
        if (company.getJobs() != null) {
            existingCompany.setJobs(company.getJobs());
        }
        if (company.getContacts() != null) {
            existingCompany.setContacts(company.getContacts());
        }

        return this.companyRepository.save(existingCompany);
    }


}