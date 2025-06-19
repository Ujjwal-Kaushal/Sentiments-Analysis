// // async function analyzeSentiment() {
// //   const text = document.getElementById("inputText").value;
// //   if (!text.trim()) {
// //     document.getElementById("result").innerText = "Please enter some text.";
// //     return;
// //   }

// //   try {
// //     const response = await fetch("/sentimentAnalyzer", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ text })
// //     });

// //     const data = await response.json();
// //     console.log("Response received:", data);

// //     if (data.error) {
// //       document.getElementById("result").innerText = "Error: " + data.error;
// //     } else {
// //       document.getElementById("result").innerText =
// //         // `Sentiment: ${data.label}, Score: ${data.score.toFixed(3)}`;
// //         `Sentiment: ${data.label}, Confidence: ${(data.score * 100).toFixed(1)}%`

// //     }
// //   } catch (err) {
// //     document.getElementById("result").innerText = "Request failed. Check console.";
// //     console.error(err);
// //   }
// // }

// async function analyzeSentiment() {
//   const text = document.getElementById("inputText").value;
//   if (!text.trim()) {
//     document.getElementById("result").innerText = "Please enter some text.";
//     return;
//   }

//   try {
//     const response = await fetch("/sentimentAnalyzer", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text })
//     });

//     const data = await response.json();
//     if (data.error) {
//       document.getElementById("result").innerText = "Error: " + data.error;
//     } else {
//       document.getElementById("result").innerText =
//         `Sentiment: ${data.label}, Confidence: ${(data.score * 100).toFixed(1)}%`;
//     }
//   } catch (err) {
//     document.getElementById("result").innerText = "Request failed. Check console.";
//     console.error(err);
//   }
// }

async function analyzeSentiment() {
  const text = document.getElementById("inputText").value;
  const resultDiv = document.getElementById("result");

  if (!text.trim()) {
    resultDiv.innerText = "Please enter some text.";
    resultDiv.className = '';
    resultDiv.style.display = "inline-block";
    return;
  }

  try {
    const response = await fetch("/sentimentAnalyzer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();

    if (data.error) {
      resultDiv.innerText = "Error: " + data.error;
      resultDiv.className = '';
    } else {
      const sentiment = data.label.toUpperCase();
      const score = (data.score * 100).toFixed(1) + "%";

      resultDiv.innerText = `Sentiment: ${sentiment}, Confidence: ${score}`;
      resultDiv.className = ''; // Reset previous

      if (sentiment === 'POSITIVE') {
        resultDiv.classList.add('positive');
      } else if (sentiment === 'NEGATIVE') {
        resultDiv.classList.add('negative');
      }
    }

    resultDiv.style.display = "inline-block";
  } catch (err) {
    console.error(err);
    resultDiv.innerText = "Request failed. Check console.";
    resultDiv.className = '';
    resultDiv.style.display = "inline-block";
  }
}

