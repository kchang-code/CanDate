import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import useUserPage from "../hooks/useUserPage";
import axios from 'axios';



export default function Tags(props) {
  const { state } = useUserPage();



  return (
    <div>

        
          <Button size="small" variant="outlined" color="primary" >
            {props.item}
          </Button>
        
   
      
      

      
    
    </div>

  );
}
