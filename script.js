const sendRequests = async () => {
    // Create an array of promises that send requests
    // first run at local your spring boot
    // first rerurn spring app the
    const localhost = 'http://localhost:8080/'
    const cr_springboot = 'sum-range';
    const tencr_springboot = 'sum-range-ten-crore';
    const cr_go = 'loop';
    const tencr_go = 'loop2';
    const cr_go_render = 'https://go-lang-first-server.onrender.com/loop';
    const tencr_go_render = 'https://go-lang-first-server.onrender.com/loop2';
    const requests = Array(5).fill(`${tencr_go_render}`).map(url => fetch(url));
  
    try {
      // Wait for all requests to finish
      const responses = await Promise.all(requests);
  
      // Get the time taken for each request
      const times = await Promise.all(
        responses.map(async (response) => {
          const startTime = Date.now();
          await response.text(); // or response.json() based on your endpoint's response type
          const endTime = Date.now();
          return endTime - startTime;
        })
      );
  
      // Calculate the average time
      const averageTime = times.reduce((acc, time) => acc + time, 0) / times.length;
      console.log(`Average request time: ${averageTime} ms`); 
    } catch (error) {
      console.error('Error sending requests:', error);
    }
  };
  
  sendRequests();