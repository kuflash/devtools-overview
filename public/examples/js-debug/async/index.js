(function () {
  const asyncJob = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 3000);
  });

  const getData = () => fetch('https://api.github.com/repos/kuflash/react-router-sitemap/issues');

  document.querySelector('.js-async').addEventListener('click', () => {
    asyncJob()
      .then(data => data * 1000)
      .then(data => ({ result: data }))
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });

  document.querySelector('.js-fetch').addEventListener('click', () => {
    getData()
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
}());
