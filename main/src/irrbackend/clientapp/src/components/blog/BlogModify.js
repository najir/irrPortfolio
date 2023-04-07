import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import { BubbleMenu, useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authService from '../api-authorization/AuthorizeService'
import "./styles/blogeditor.css"

const MenuBar = ({ editor }) => {
    if (!editor) {
      return null
    }
    return (
      <>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          h1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          h4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          h5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          h6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          redo
        </button>
      </>
    )
  }
  
const BlogModify = (props) => {
    const [blogData, setBlogData] = useState({
        id: "",
        title : "loading",
        summary : "",
        postDate : "",
        blogContent : "",
    });
    const { blogid } = useParams();

    const editor = useEditor({
        extensions: [
          TextAlign.configure({
            types: ['heading', 'paragraph']
          }),
        TextStyle.configure({ types: [ListItem.name] }),
        StarterKit.configure({
            bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
            orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
        }),
        ],
        content: blogData.blogContent
        ,
    })

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
            setTitle(data.title);
            setDescription(data.summary);
    
          });
        }, [editor]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function modifyBlog(editor) {
      var submitTitle = title;
      var submitDescription = description;
      var error = "";
      var date = new Date().toLocaleDateString();
      var jsonData = editor.getJSON();
      if(submitTitle.length < 4 || submitTitle.length > 32){
          error += "Title must be 4 to 32 characters long \r\n";
      } if(submitDescription.length > 256){
          error += "Description must be less than 256 characters long \r\n";
      }
      if(error){
          alert(error);
      }else{
        const token = await authService.getAccessToken();
        await fetch(`${process.env.PUBLIC_URL}/api/blog/modifyblog`, {
          method: "PUT",
          headers: !token ? {} : { 'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body:JSON.stringify({
            "id": blogData.id,
            "title": submitTitle,
            "summary": submitDescription,
            "blogcontent": editor.getHTML(),
            "postdate": date,
            "isprivate": false 
          })
        }).then(response => {
          if (response.status === 403){
            alert("Modifying posts requires an Administrator Account")
        }})
      }
  }



    if (!editor) {
      return null
    }

    return (
        <div>
            <div id="pagefill-small"></div>
            <div className="blog-editor">
            <div className="d-flex gap-3 m-3">
                <h5>Title: </h5>
                <input type="text" name="title" className="title-input" placeholder={blogData.title} onChange={e => setTitle(e.target.value)}></input>
                <h5>Description: </h5>
                <input type="text" name="description" className="description-input" placeholder={blogData.summary} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div className="blog-editor-menu">
                <MenuBar  editor={editor} />
            </div>
            <BubbleMenu className="bubbleMenu" editor={editor} tippyOptions={{ duration: 100 }}>
            <div className="text-align-buttons">
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
                >
                    left
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
                >
                    center
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
                >
                    right
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
                >
                    justify
                </button>
                </div>
                <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
                >
                bold
                </button>
                <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
                >
                italic
                </button>
                <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
                >
                strike
                </button>
            </BubbleMenu>
            <EditorContent editor={editor} />
            <button onClick={()=>modifyBlog(editor)} className="post-button">Save Modification</button>
            </div>
        </div>
    )
    }
    
export default BlogModify;
