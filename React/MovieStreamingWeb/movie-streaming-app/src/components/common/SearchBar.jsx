import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({searchTerm,onSearchChange,onSearchSubmit}) => {
  return (
    <Form onSubmit={onSearchSubmit} >
          <InputGroup className='mb-4'>
             <Form.Control
               type='text'
               placeholder='Search for movies...'
               value={searchTerm}
               onChange={(e)=>onSearchChange(e.target.value)}
               />
               <Button variant='outline-secondary' type='submit'>
                    <FaSearch />Search
               </Button>
          </InputGroup>
    </Form>
  );
}

export default SearchBar





