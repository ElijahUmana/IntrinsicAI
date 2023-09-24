"use client"
import styles from './page.module.css'
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function getData() {
  // const res = await fetch('https://api.kanye.rest')
  
  // const res = fetch('http://127.0.0.1:5000/hello',
  // )
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.
 
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  // return res.JSON;
}
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function Home() {

const url = 'http://127.0.0.1:5000/hello';
fetch(url)
  .then(res => res.text())  // convert the response body to a string
  .then(data => {
    console.log("IT IS " + data);
  });

  // postData("http://127.0.0.1:5000/submit_project", { description: 'cat website with pictures of cats and their names' }).then((data) => {
  // console.log(data); // JSON data parsed by `data.json()` call
// });
  return (
    <div class="text-center" > 
      <h1>Welcome to Intrinsic.ai!</h1>   
      <Stack gap={3}>
        <div className="p-2">
        <h2>What is Intrinsic.ai?</h2>
        <p>Have you ever wanted to learn to program, but found every online programming tutorial terribly boring? Intrinsic.ai is here to help! Our AI-powered teaching platform will guide you through creating your very own website, step-by-step, on any topic you'd like. Want to create a website showing off pictures of your dog? We can do that. Want to create a personal portfolio page to display your projects? We can do that, too! With Intrinsic.ai, learning has never been more unique -- intrinsically driven, as we like to say. </p>
        </div>
        <div className="p-2">
        <h2> How do I use it?</h2>
      <p>Intrinsic.ai is incredibly simple to use! Just click "Start Learning!" to head over to our tutorial page, and let our AI_powered platform know what you're interested in creating. Remember, your creativity is your only limit! Intrinsic.ai will give you feedback on your ideas, and then once your project is well-defined, you'll be taken to our on-the-spot generated lessons, where you'll learn step-by-step how to create the website of your dreams, before finally putting your skills to the test at the end. </p>
      
        </div>
      </Stack>
      <div className="d-grid gap-2">
      <Form action="/prompt" class="inline">
          <Button variant="primary" size="lg" type="submit">Start Learning!</Button>
      </Form>
      </div>
    </div>
    // start button
  )
}
