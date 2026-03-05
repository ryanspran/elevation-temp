

## Observation

The block-retaining-walls service has 6 trust signals, while all other services have 5. The current 2-column card grid works perfectly with 6 (3x2) but leaves an uneven row with 5.

Two options:

1. **Remove the 6th card** from block-retaining-walls to match the other pages (all have 5).
2. **Add a 6th card** to every other service so they all have 6.

Since your screenshot shows all 6 cards looking great in the 2x3 grid, the cleanest approach is to **add a 6th trust signal to each of the other services** so they all fill the grid evenly. Each service would get a contextually relevant 6th card (e.g., "Lasting Warranty", "Post-Install Support", etc.).

### Changes

**`src/data/services.ts`**: Add a 6th `trustSignals` entry to every service that currently has only 5. Each will be tailored to the service but follow a similar pattern (warranty, transparency, or post-install support).

This is a data-only change — no template or layout changes needed.

