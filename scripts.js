const quotes = [
  { text: 'Serving with CGARS is an honor and a privilege.', author: 'LT. Youseff Mikhaeil' },
  { text: 'Every shift is a chance to help a neighbor.', author: 'CC. Alyssa Landi' },
  { text: 'CGARS gave me the skills to save lives.', author: 'EMT. Bhrugu Patel' },
  { text: 'Volunteering here is incredibly rewarding.', author: 'EMT. Mark Peña' }
];

let quoteIndex = 0;
function showQuote() {
  const q = quotes[quoteIndex];
  document.getElementById('testimonial-quote').innerText = '"' + q.text + '"';
  document.getElementById('testimonial-author').innerText = '- ' + q.author;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

setInterval(showQuote, 4000);
window.onload = showQuote;
