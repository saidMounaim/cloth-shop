import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.perventDefault();
    if (keyword !== "") {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        placeholder="Search products ..."
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button variant="primary" type="submit" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
