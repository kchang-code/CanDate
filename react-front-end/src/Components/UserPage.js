import React, { useEffect, useState, useContext } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";
import "./UserPage.scss";
import axios from "axios";
import NavBar from "./NavBar";
import { TagsContext } from "../Context/TagsContext";
import { useRadioGroup } from "@material-ui/core";

const UserPage = (props) => {
  const { state } = useUserPage();
  const [user_tag, setUserTag] = useState([]);
  const [tag, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/user_tag").then((res) => {
      setUserTag(res.data.user_tag);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/tags").then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  const filterTags = (id, userTag) => {
    const tagArr = [];
    for (const tag of userTag) {
      if (tag.id === id) {
        tagArr.push(tag.interest);
      }
    }
    return tagArr;
  };

  const getNameOfTag = (tagArr, tags) => {
    const tagNameArr = [];
    for (const tag of tagArr) {
      for (const obj of tags) {
        if (tag === obj.id) {
          tagNameArr.push(obj.name);
        }
      }
    }
    //[movie. sport]
    let userTag = {
      tags: tagNameArr,
      //id:1
      //tags : [sport, movie]
    };
    return userTag.tags;
  };

  // add selected tag id into arr
  const handleTagClick = (itemId) => {
    const selectArr = [...selectTag];
    selectArr.push(itemId)
    setSelectTag(selectArr)
  };

  return (
    <>
      <TagsContext.Provider values={tag}>
        <NavBar handleTagClick={handleTagClick}/>
      </TagsContext.Provider>
      <div>
        {state.users.map((filteredUser) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <ProfileCard
                  key={filteredUser.id}
                  name={filteredUser.first_name}
                  age={filteredUser.age}
                  profile_photo={filteredUser.profile_photo}
                  tag={getNameOfTag(filterTags(filteredUser.id, user_tag), tag)}
                />
              </Grid>
            </Grid>
          );
        })}
      </div>
      {console.log("state.users", state.users)}
      {console.log("clicked", selectTag)}

    </>
  );
};

export default UserPage;
