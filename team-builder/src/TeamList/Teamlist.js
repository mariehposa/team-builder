import React, { useState } from 'react';
import uuid from 'uuid';
import Form from './Form';

const initialTeamList = [
    { id: uuid(), name: 'Maryam', email: 'maryam@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Kiyani', email: 'kiyani@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Mildred', email: 'mildred@gmail.com', role: 'developer'},
]

const initialTeamForm = {
    name: '',
    email: '',
    role: '',
}

function TeamList () {
    const [teamMemberList, setTeamMemberList] = useState(initialTeamList);
    const [teamMemberForm, setTeamMemberForm] = useState(initialTeamForm);

    const onNameChange = event => {
        setTeamMemberForm({
            name: event.target.value,
            email: teamMemberForm.email,
            role: teamMemberForm.role,
        });
    }

    const onEmailChange = event => {
        setTeamMemberForm({
            name: teamMemberForm.name,
            email: event.target.value,
            role: teamMemberForm.role,
        });
    }

    const onRoleChange = event => {
        setTeamMemberForm({
            name: teamMemberForm.name,
            email: teamMemberForm.email,
            role: event.target.value,
        });
    }

    return(
       <div>
        <Form 
            onNameChange = {nameChange}
            onEmailChange = {emailChange}
            onRoleChange = {roleChange}
        />

       {
        teamMemberList.map(team => (
          <p key={team.id}>
            {team.name} email is {team.email} and has a {team.role} role.
          </p>
        ))
       }
       </div>
    );

}

export default TeamList;