import "./styles/blogsingle.css";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';

function BlogWrapper(BlogSingle) {
  return function WrappedComponent(props) {
    const [blogData, setBlogData] = useState({
      title : "loading",
      summary : "",
      postDate : "",
      blogContent : "",
  });
  const { blogid } = useParams();
  const editor = useEditor({ content: blogData.blogContent,  extensions: [StarterKit],});


  
  useEffect(() => {
    if (!editor) {
      return undefined
    }

    fetch(`${process.env.PUBLIC_URL}/api/blog/getblogbyid/${blogid}`, {
      method: "GET",
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }).then(response => response.json())
      .then(data => {
        setBlogData(data);
        editor.commands.setContent(data.blogContent.toString());

      });

    editor.setEditable(false)
  }, [editor])

  if (!editor) {
    return null
  }
    return <BlogSingle {...props} editor={editor} blogData={blogData} />;
  }
}

class BlogSingle extends React.Component{
  constructor(props){
    super(props);
  }    

 componentDidMount(){
      window.scrollTo(0, 0);
  }

    render() {
        return (
            <div>
              <div id="pagefill-small"></div>
              <div className="blog-single">
                <div className="title-info">
                  <h1>{this.props.blogData.title}</h1>
                  <div className="sub-info">
                    <h4 className="user">Isaac Perks</h4>
                    <h6>Posted On {this.props.blogData.postDate.slice(0, 10)}</h6>
                    <p>{this.props.blogData.summary}</p>
                  </div>
                </div>
                <EditorContent editor={this.props.editor} />
              </div>
            </div>
        )
    }
}

export default BlogWrapper(BlogSingle);
