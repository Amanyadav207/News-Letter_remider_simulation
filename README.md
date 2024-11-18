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
   git clone <repository-url>
   cd newsletter-renewal-flow
