/*global $*/

(function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.email}</td>
                            <td>${newContact.phone}</td>
                         </tr>`);
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#form1');
    const contactList = $('#form2');

    contactForm.submit(event => {
        const newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };

        addContact(newContact);
        hideContactForm();

        event.preventDefault();
    });

    contactList.submit(event => {

        let fileName = $("#file").val();
        fetch(fileName)
            .then(r => {
                if (r.ok) {
                    return r.json();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(rt => {
                for (let i = 0; i < rt.length; i++) {
                    const newContact = {
                        firstName: rt[i].firstName,
                        lastName: rt[i].lastName,
                        phone: rt[i].phone,
                        email: rt[i].email
                    };
                    addContact(newContact);
                }
            })
            .catch(err => {
                $('#dialog p').append(err);
            });

        event.preventDefault();
        $("#form2")[0].reset();
    });

    function hideContactForm() {
        //contactForm.hide();
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        //contactForm.show();
        contactForm.slideDown('slow');
    });
    $('#addContactList').click(() => {
        contactList.slideDown('slow');
    });
    $('#cancelList').click(() => {
        contactList.slideUp('fast'); // 5000);
        contactList[0].reset();
    });
}());