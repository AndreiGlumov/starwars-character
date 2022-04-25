import {useState, useEffect} from "react";
import styled from '@emotion/styled';
import data from '../data/data.json'

const SearchContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
`

const Results = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
`

const Search = () => {
    const [input, setInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        setFilteredUsers(data.character[0].filter(elem => elem.toLowerCase().includes(input.toLowerCase())))
    }, [input])


    return(
        <SearchContainer>
            <p>You can search any StarWars Character</p>
            <Input type="text" placeholder="Character Search" onChange={(e) => setInput(e.target.value)} />
            <div>
                {filteredUsers.map((person, index) => <Results key={index}>{person}</Results>)}
            </div>
        </SearchContainer>
    )
}

export default Search;