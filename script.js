// script.js
async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const resultBox = document.getElementById('weatherResult');

  if (!location) {
    resultBox.innerText = 'Please enter a location.';
    return;
  }

  const apiKey = 'ac3a681e7c584987bbc132846252705';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Location not found');

    const data = await response.json();
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    resultBox.innerHTML = `
      <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } catch (error) {
    resultBox.innerText = 'Error: ' + error.message;
  }
}
