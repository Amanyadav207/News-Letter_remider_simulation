# Newsletter Subscription Renewal Flow Simulation

This project simulates a flow for a Newsletter Subscription Renewal process. The simulation includes multiple steps, such as sending reminders, waiting periods, and checking the renewal status. The flow progresses through a series of stages with logs that track each step.

## Objective

The primary objective of this project is to create a user-friendly interface that visualizes the renewal process and simulates actions like sending emails, waiting, and checking user renewal status. The flow ends when the user renews their subscription or after all steps are completed.

## Features

- **Flow Simulation UI**: A simple UI to initiate and visualize the flow.
- **Step-by-Step Simulation**: Simulates each stage with time delays to mimic real-world waiting periods.
- **Flow Logs**: Displays a log of events during the simulation, including the status of each stage.
- **Interactive Controls**:
  - **Start Flow**: Begin the simulation.
  - **Reset Flow**: Reset the flow to its initial state after completion.

## Flow Logic

1. **First Reminder**: Send a simulated renewal reminder email to the user.
2. **Wait Period 1**: Simulate waiting for 3 days.
3. **First Check**: Check if the user has renewed:
   - If renewed, send a "Thank You" message and end the flow.
   - If not, proceed to the next step.
4. **Second Reminder**: Send a second renewal reminder email.
5. **Wait Period 2**: Simulate waiting for 2 days.
6. **Final Check**: Perform the final renewal check:
   - If renewed, send a "Thank You" message and end the flow.
   - If not, end the flow with a "No Further Action" message.

## Technology Stack

- **Frontend**: React.js (Vite)
- **Backend**: Simulated with frontend logic (no actual backend required)

## Installation and Setup

### Prerequisites

- Node.js (version 16 or above)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Amanyadav207/News-Letter_remider_simulation
   cd News-Letter_remider_simulation

2. Install dependencies:
    ```bash 
    npm install

3. Start the development server:
    ```bash
    npm run dev

## Simulation Details
- Waiting Periods:
  - First waiting period: 3 seconds (simulating 3 days)
  - Second waiting period: 2 seconds (simulating 2 days)
- Randomized Outcomes:
  - Renewal status is randomly generated at each check (Math.random()).

## Assumptions
1. No actual emails are sent; the process is simulated.
2. Time delays represent waiting periods for simplicity.
3. Logs are stored in memory and reset when the flow restarts.
