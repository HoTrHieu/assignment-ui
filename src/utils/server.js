import { createServer } from "miragejs";


export const StartServer = () => {
  createServer({
    routes() {
      this.get("/api/receive-callback", () => {
        return {
          department: {
            title: "Would you like to receive callback in 28 seconds?",
            label: "Choose who you would like to talk to:",
            departments: [
              {
                id: 1,
                label: "Sales",
                value: "sales"
              },
              {
                id: 2,
                label: "Support",
                value: "support"
              },
            ],
          },
          actionData: {
            tabs: [
              {
                id: "sales",
                header: 'Call Me now',
                panel: {
                  title: 'Would you like to receive a callback?',
                  button: 'Call me now',
                  descirption: 'You are already the 6th person who has ordered a call',
                }
              },
              {
                id: "support",
                header: 'Call me later',
                panel: {
                  title: 'Choose the best time for the callback',
                  button: 'Call me later',
                  descirption: 'You are already the 6th person who has ordered a call',
                }
              },
              {
                id: "chat",
                header: 'Leave a message',
                panel: {
                  title: 'Choose the best time for the callback',
                  button: 'Leave a mess',
                  descirption: 'You are already the 6th person who has ordered a call',
                }
              },
              {
                id: "videoCall",
                header: 'Schedule a meeting',
                panel: {
                  title: 'Choose the best time for the Schedule a meeting',
                  button: 'Schedule a meeting',
                  descirption: 'You are already the 6th person who has ordered a call',
                  subText: 'You are already the 6th person who has ordered a call',
                }
              },
            ],
          },
          phoneInfo: {
            title: "Your number",
            button: "Leave a mess",
            descirption: 'You are already the 6th person who has ordered a call',
          },
          moreInfo: {
            title: "Let us know more about you:",
            button: "Leave a mess",
            descirption: 'You are already the 6th person who has ordered a call',
          },
          successInfo: {
            title: "Thank you for scheduling a call",
            descirption: "Thank you for contacting us!",
            subDescription: "Our consultant will call you back at the booked time!",
          },
          errorInfo: {
            title: "Error long title",
            descirption: "Voluptatem dolorum maiores omnis esse est et consequatur est eius voluptatem qui odit explicabo. Eum dicta recusandae delectus. ",
          },
        };
      });

      this.post("/api/submit-action", (data) => {
        // return new Response(500, {}, { errors: ["The database went on vacation"] });

        return {
          code: 1,
          message: "success"
        };
      });

      this.post("/api/submit-phone", (data) => {
        // return new Response(500, {}, { errors: ["The database went on vacation"] });

        return {
          code: 1,
          message: "success"
        };
      });

      this.post("/api/submit-more-info", (data) => {
        // return new Response(500, {}, { errors: ["The database went on vacation"] });

        return {
          code: 1,
          message: "success"
        };
      });
    },
  });
}

