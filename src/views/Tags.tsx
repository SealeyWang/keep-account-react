import React, {} from "react";
import Layout from "../components/Layout";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from 'react-router-dom';
import {Button} from "../components/Button";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

const TagsList = styled.ul`
  font-size: 16px;
  background: white;

  > li {

    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;

    }

    .icon {
      min-width: 16px;
      min-height: 16px;
    }
  }

`








function Tags() {
    const {tags,addTag} = useTags()


    return (
        <Layout>
            <TagsList>
                {
                    tags.map(tag =>
                        <li key={tag.id}>
                            <Link to={'/tags/' + tag.id}>
                                <span className="oneLine">{tag.name}</span>
                                <Icon name="right"/>
                            </Link>
                        </li>

                    )
                }

            </TagsList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
                <Space/>
            </Center>
        </Layout>
    );
}

export default Tags
