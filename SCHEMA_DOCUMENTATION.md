# financialData.js Schema Documentation

Complete schema reference for the Frigate Financial Report data structure.

---

## Overview

The `financialData.js` file contains **11 main sections** with ~500+ data points that power all report components.

**File Location:** `src/data/financialData.js`  
**Total Lines:** 440  
**Data Flow:** financialData → App.jsx → Component Props

---

## 1. cover (Object)

**Purpose:** Company information and report metadata for the cover page.

### Structure

```javascript
{
  company: String,        // Full legal entity name
  title: String,          // Report title
  subtitle: String,       // Report subtitle/description
  period: String,         // Time period covered
  preparedFor: String,    // Target audience
  compiledDate: String,   // Report compilation date
  auditFirms: String,     // Auditor names (pipe-separated)
  cin: String            // Corporate Identification Number
}
```

### Example Values

```javascript
{
  company: "FRIGATE ADVANCED SYSTEMS PRIVATE LIMITED",
  title: "Strategic Financial Audit & Analysis Report",
  subtitle: "Comprehensive Forensic Review of Financial Statements...",
  period: "FY 2021–22 to FY 2024–25 (4 Years)",
  preparedFor: "Board of Directors & Investors",
  compiledDate: "15 January 2026",
  auditFirms: "T. Ramesh & Associates | Y. Jeya Kumar & Co.",
  cin: "U72900TN2019PTC132155"
}
```

### Component Mapping

- **Used by:** `Cover.jsx`
- **Props:** Entire `cover` object passed as `data`

---

## 2. executiveSummary (Object)

**Purpose:** High-level KPIs and overall financial health verdict.

### Structure

```javascript
{
  kpis: Array[8],      // Key performance indicators
  verdict: Object      // Overall health score box
}
```

### 2.1 kpis Array (8 items)

Each KPI object:

```javascript
{
  label: String,         // KPI metric name (e.g., "Revenue (FY25)")
  value: String,         // Main value displayed large (e.g., "₹22.45 Crores")
  sub: String,           // Secondary info/growth rates
  badgeClass: String,    // CSS class: "badge-red" | "badge-green" | "badge-orange" | "badge-blue"
  badge: String          // Badge text with emoji (e.g., "📈 Exceptional Growth")
}
```

### 2.2 verdict Object

```javascript
{
  label: String,         // Section label (e.g., "OVERALL FINANCIAL HEALTH SCORE")
  score: String,         // Numeric score (e.g., "2.8/10")
  title: String,         // Status title (e.g., "CRITICAL DISTRESS — Immediate Intervention Required")
  description: String    // Detailed explanation (long text)
}
```

### Component Mapping

- **KPIs:** `ExecutiveSummary.jsx` → `KPICard.jsx`
- **Verdict:** `OverallScore.jsx`

---

## 3. revenueAnalysis (Object)

**Purpose:** Profit & Loss statement data with 4-year comparison.

### Structure

```javascript
{
  plData: Array[10],   // P&L line items
  alert: Object        // Critical alert box
}
```

### 3.1 plData Array (10 items)

Each P&L line item:

```javascript
{
  particulars: String,     // Line item name
  fy22: String,            // FY 2021-22 value (thousands)
  fy23: String,            // FY 2022-23 value
  fy24: String,            // FY 2023-24 value
  fy25: String,            // FY 2024-25 value
  cagr: String,            // Compound Annual Growth Rate (e.g., "392%")
  yoy: String,             // Year-over-year change (e.g., "+153%")
  
  // Optional styling properties
  class?: String,          // Row style: "highlight" | "subtotal" | "total"
  particularClass?: String, // CSS for particulars column
  fy25Color?: String,      // Color class for FY25
  cagrColor?: String,      // Color class for CAGR
  yoyColor?: String,       // Color class for YoY
  highlight?: Boolean      // Should row be highlighted?
}
```

**Color Classes:** `"text-red"` | `"text-green"` | `"text-orange"` | `"text-muted"`

**Special Row Types:**
- `class: "subtotal"` → Subtotal rows (Gross Profit, EBITDA)
- `class: "total"` → Final total row (Net Profit/Loss)

### 3.2 alert Object

```javascript
{
  type: String,          // Alert severity: "red" | "orange" | "blue" | "green"
  icon: String,          // Emoji icon (e.g., "⚠")
  title: String,         // Alert heading
  description: String    // Alert message
}
```

### Component Mapping

- **Used by:** `RevenueAnalysis.jsx`
- **plData:** Rendered in `data-table`
- **alert:** Rendered in `alert-{type}` box

---

## 4. financialRatios (Object)

**Purpose:** Financial ratios across 4 categories with 4-year trends.

### Structure

```javascript
{
  liquidityRatios: Array[6],      // Cash & liquidity metrics
  profitabilityRatios: Array[6],  // Margin & profitability metrics
  efficiencyRatios: Array[5],     // Asset & working capital efficiency
  solvencyRatios: Array[4]        // Debt & leverage metrics
}
```

### Ratio Object Structure (applies to all 4 categories)

```javascript
{
  name: String,            // Ratio name (e.g., "Current Ratio")
  fy22: String,           // FY22 value (e.g., "0.42×")
  fy23: String,           // FY23 value
  fy24: String,           // FY24 value
  fy25: String,           // FY25 value
  benchmark: String,      // Industry standard (e.g., "≥ 1.5×")
  verdict: String,        // Assessment (e.g., "⚠ Liquidity Crisis")
  
  // Color classes for each year
  fy22Color?: String,     // "text-red" | "text-green" | "text-orange"
  fy23Color?: String,
  fy24Color?: String,
  fy25Color?: String,
  verdictColor?: String,  // Color for verdict text
  highlight?: Boolean     // Should row be highlighted?
}
```

### Category Breakdown

- **liquidityRatios (6 ratios):** Current Ratio, Quick Ratio, Cash Ratio, Defensive Interval, Net Working Capital, Current Liabilities to Net Worth
- **profitabilityRatios (6 ratios):** Gross Margin %, Net Profit Margin %, EBITDA Margin %, ROE %, ROA %, ROCE %
- **efficiencyRatios (5 ratios):** Asset Turnover, Inventory Turnover, DSO, DPO, Cash Conversion Cycle
- **solvencyRatios (4 ratios):** Debt-to-Equity, Interest Coverage, Fixed Charge Coverage, Debt Service Coverage

### Component Mapping

- **Used by:** `FinancialRatios.jsx`
- **Rendered in:** 4 separate tables (one per category)

---

## 5. balanceSheet (Object)

**Purpose:** Assets and liabilities breakdown with year-over-year changes.

### Structure

```javascript
{
  assets: {
    nonCurrent: Array,    // Long-term assets
    current: Array        // Short-term assets
  },
  liabilities: {
    equity: Array,        // Shareholder equity
    nonCurrent: Array,    // Long-term liabilities
    current: Array        // Short-term liabilities
  }
}
```

### Balance Sheet Item Structure (applies to all categories)

```javascript
{
  name: String,           // Item name (e.g., "Fixed Deposits (Pledged as OD Collateral) ⚠")
  fy25: String,          // FY25 value in thousands (e.g., "8,688")
  fy24: String,          // FY24 value in thousands
  change: String,        // Percentage change (e.g., "+4%" or "-21%")
  
  // Optional styling
  class?: String,        // CSS class for row
  fy25Color?: String,    // Color for FY25 value
  fy24Color?: String,    // Color for FY24 value
  changeColor?: String,  // Color for change percentage
  highlight?: Boolean    // Should row be highlighted?
}
```

### Array Sizes

- `assets.nonCurrent`: 1 item (Fixed Deposits)
- `assets.current`: 8 items (Vendor advances, receivables, inventory, cash, etc.)
- `liabilities.equity`: 3 items (Share capital, reserves, P&L losses)
- `liabilities.nonCurrent`: 2 items (Director loans, ESOP provision)
- `liabilities.current`: 5 items (Customer advances, borrowings, payables, provisions)

### Component Mapping

- **Used by:** `BalanceSheet.jsx`
- **Rendered in:** Two-column layout (Assets | Liabilities)

---

## 6. expenseAnalysis (Object)

**Purpose:** Expense breakdown and related party transactions.

### Structure

```javascript
{
  expenses: Array[17],          // Expense line items + spacers + totals
  rptTransactions: Array[7]     // Related party transactions
}
```

### 6.1 expenses Array

Each expense item:

```javascript
{
  name: String,              // Expense category name
  fy22: String,             // FY22 amount (thousands)
  fy23: String,             // FY23 amount
  fy24: String,             // FY24 amount
  fy25: String,             // FY25 amount
  percent: String,          // Percentage of revenue (e.g., "97.2%")
  risk: String,             // Risk assessment label (e.g., "ROOT CAUSE", "CRITICAL", "Normal")
  
  // Optional styling
  class?: String,           // "highlight" | "subtotal" | "total"
  nameClass?: String,       // CSS for name column
  fy25Color?: String,       // Color for FY25 value
  percentColor?: String,    // Color for percentage
  riskPill?: String,        // CSS class for risk badge: "pill-red" | "pill-orange" | "pill-green"
  highlight?: Boolean
}
```

**Special Row Types:**
- `{ type: "spacer" }` → Empty row for visual spacing (no other properties)
- `class: "subtotal"` → Subtotal row (e.g., "Total Employee Costs")
- `class: "total"` → Grand total row

### 6.2 rptTransactions Array

Related party transaction object:

```javascript
{
  description: String,      // Transaction description (e.g., "Director Salary — Managing Director")
  party: String,           // Related party name (e.g., "Vasanthan Tamizhinian")
  fy23: String,            // FY23 amount
  fy24: String,            // FY24 amount
  nature: String,          // Transaction type (e.g., "Employment", "Professional Services", "Rental")
  fy24Color?: String,      // Color for FY24 value
  highlight?: Boolean
}
```

### Component Mapping

- **Used by:** `ExpenseAnalysis.jsx`
- **expenses:** Main expense table
- **rptTransactions:** Separate RPT table

---

## 7. criticalFlaws (Object)

**Purpose:** List of identified business issues categorized by severity.

### Structure

```javascript
{
  criticalFlaws: Array[12]    // Business flaws/issues
}
```

### Flaw Object Structure

```javascript
{
  type: String,           // Severity level: "red" | "orange" | "blue"
  icon: String,           // Emoji indicator: "🔴" | "🟠" | "🔵"
  title: String,          // Flaw heading (e.g., "FLAW #1: Gross Margin of 2.8% — Selling Near Cost")
  description: String     // Detailed explanation (long text, 200-400 words)
}
```

### Severity Types

- **"red" (🔴):** Critical/immediate issues (Flaws #1-6)
- **"orange" (🟠):** High priority issues (Flaws #7-10)
- **"blue" (🔵):** Medium priority issues (Flaws #11-12)

### Component Mapping

- **Used by:** `CriticalFlaws.jsx`
- **Rendered as:** Alert boxes with color-coded headers

---

## 8. scorecard (Object)

**Purpose:** Visual and weighted scoring of financial health dimensions.

### Structure

```javascript
{
  scores: Array[10],         // Visual scores for bar chart
  weightedScores: Array[10]  // Detailed weighted breakdown
}
```

### 8.1 scores Array (Simple bar chart data)

```javascript
{
  label: String,        // Metric name (e.g., "Revenue Growth")
  score: Number,        // Numeric score 0-10 (e.g., 9)
  barClass: String,     // CSS for bar color: "bar-red" | "bar-green" | "bar-orange" | "bar-blue"
  valueClass: String    // CSS for score text: "text-red" | "text-green" | "text-orange"
}
```

### 8.2 weightedScores Array (Detailed scoring)

```javascript
{
  category: String,       // Category name (e.g., "Gross Margin (Most Critical)")
  score: String,          // Raw score (e.g., "0.5/10")
  weight: String,         // Weight percentage (e.g., "20%")
  weighted: String,       // Weighted contribution (e.g., "0.10")
  priority: String,       // Priority label (e.g., "URGENT FIX #1", "HIGH PRIORITY", "MEDIUM", "STRATEGIC")
  scoreColor: String,     // Color for score column
  weightedColor: String,  // Color for weighted score
  highlight?: Boolean,    // Should row be highlighted?
  bold?: Boolean          // Should text be bold?
}
```

### Component Mapping

- **Used by:** `FinancialScorecard.jsx`
- **scores:** Rendered as horizontal bar chart
- **weightedScores:** Rendered as detailed table

---

## 9. strategicAdvisory (Object)

**Purpose:** Strategic recommendations organized by priority.

### Structure

```javascript
{
  recommendations: Array[8]    // Strategic action items
}
```

### Recommendation Object Structure

```javascript
{
  priority: String,      // Priority level: "critical" | "high" | "medium" | "growth"
  icon: String,          // Visual indicator: "🔴" | "🟠" | "🔵" | "🟢"
  title: String,         // Action title (e.g., "CRITICAL — 0–60 Days: Fix Gross Margin")
  rootCause: String,     // Problem statement (e.g., "Root cause: Materials consuming 97.2%...")
  actions: Array[String] // Array of 5-8 action items (bullet points)
}
```

### Priority Levels (maps to card styling)

- **"critical"** → Red header (🔴) → `.rec-header.critical`
- **"high"** → Orange header (🟠) → `.rec-header.high`
- **"medium"** → Blue header (🔵) → `.rec-header.medium`
- **"growth"** → Green header (🟢) → `.rec-header.growth`

### Component Mapping

- **Used by:** `StrategicAdvisory.jsx`
- **Rendered as:** Grid of recommendation cards with color-coded headers

---

## 10. actionPlan (Object)

**Purpose:** Timeline-based execution roadmap.

### Structure

```javascript
{
  phases: Array[6]    // Timeline phases
}
```

### Phase Object Structure

```javascript
{
  period: String,        // Timeline label (e.g., "Week 1–2 | IMMEDIATE", "Month 4–6 | QUARTER 2")
  focus: String,         // Focus area heading (e.g., "CEO Directive:", "Pricing Overhaul:")
  description: String,   // Action description (detailed paragraph, 100-200 words)
  dotColor: String       // Timeline dot color: "red" | "orange" | "green"
}
```

### Timeline Phases

1. **Week 1-2:** `dotColor: "red"` (Immediate actions)
2. **Week 3-4:** `dotColor: "red"` (Month 1 actions)
3. **Week 5-8:** `dotColor: "orange"` (Month 2 actions)
4. **Week 9-12:** `dotColor: "orange"` (Month 3 actions)
5. **Month 4-6:** `dotColor: "green"` (Quarter 2 milestone)
6. **Month 7-12:** `dotColor: "green"` (H2 FY26 goals)

### Component Mapping

- **Used by:** `ActionPlan.jsx`
- **Rendered as:** Vertical timeline with colored dots

---

## 11. conclusion (Object)

**Purpose:** Summary metrics table showing 4-year trends.

### Structure

```javascript
{
  summaryMetrics: Array[11]    // Key summary metrics
}
```

### Summary Metric Object Structure

```javascript
{
  name: String,          // Metric name (e.g., "Revenue (₹ Thousands)")
  fy22: String,         // FY22 value (e.g., "2,281")
  fy23: String,         // FY23 value
  fy24: String,         // FY24 value
  fy25: String,         // FY25 value
  trend: String,        // Trend description with emoji (e.g., "📈 93× Growth — Exceptional")
  trendColor: String,   // Color for trend column
  
  // Optional year-specific colors
  fy22Color?: String,   // "text-red" | "text-green" | "text-orange"
  fy23Color?: String,
  fy24Color?: String,
  fy25Color?: String,
  highlight?: Boolean   // Should row be highlighted?
}
```

### Metrics Included (11 total)

1. Revenue
2. Net Loss After Tax
3. Gross Margin %
4. Net Profit Margin
5. Cash & Equivalents
6. Shareholders' Funds
7. Vendor Advances
8. Customer Advances
9. Short-Term Borrowings
10. Export Revenue
11. Cumulative Net Loss

### Component Mapping

- **Used by:** `Conclusion.jsx`
- **Rendered as:** Summary table with trend indicators

---

## Common Styling Classes

### Color Classes (used throughout all sections)

| Class | Color | Usage |
|-------|-------|-------|
| `text-red` | Red (#E10600) | Critical/negative values |
| `text-green` | Green (#2E7D32) | Positive values |
| `text-orange` | Orange (#F7931E) | Warning/caution |
| `text-muted` | Gray (#6B6B6B) | Neutral/secondary text |
| `text-blue` | Blue (#E10600) | Informational |

### Badge/Pill Classes

| Class | Background | Text Color | Usage |
|-------|------------|------------|-------|
| `badge-red` | #FEE8E8 | Red | Negative badges |
| `badge-green` | #E6F4EE | Green | Positive badges |
| `badge-orange` | #FEF3E6 | Orange | Warning badges |
| `badge-blue` | #E8F0FE | Blue | Info badges |
| `pill-red` | #FEE8E8 | Red | Risk pills |
| `pill-green` | #E6F4EE | Green | Success pills |
| `pill-orange` | #FEF3E6 | Orange | Warning pills |

### Bar Classes (for charts)

| Class | Color | Usage |
|-------|-------|-------|
| `bar-red` | Red | Low scores |
| `bar-green` | Green | High scores |
| `bar-orange` | Orange | Medium scores |
| `bar-blue` | Blue | Informational |

### Font Weight Classes

| Class | Weight | Usage |
|-------|--------|-------|
| `font-bold` | 700 | Bold emphasis |
| `font-semi` | 600 | Semi-bold emphasis |

### Row/Highlight Classes

| Class | Effect | Usage |
|-------|--------|-------|
| `highlight: true` | Yellow background (#FFF8E6) | Important rows |
| `class: "subtotal"` | Gray background (#EEF1F8) | Subtotal rows |
| `class: "total"` | Navy background, white text | Total rows |

---

## Data Type Reference

### Common Patterns

| Value Type | Format | Example |
|------------|--------|---------|
| Currency (₹) | String with commas | `"22.45 Crores"`, `"2,281"` |
| Percentages | String with % | `"97.2%"`, `"+161% YoY"` |
| Ratios | String with × | `"0.87×"`, `"≥ 1.5×"` |
| Dates | String | `"15 January 2026"` |
| Growth | String with +/- | `"+153%"`, `-21%"` |
| Scores | String | `"2.8/10"`, `"0.5/10"` |
| Emojis | Unicode string | `"📈"`, `"⚠"`, `"🔴"` |

---

## Component-to-Data Mapping

| Component | Data Source | Primary Keys |
|-----------|-------------|--------------|
| `Cover.jsx` | `cover` | All properties |
| `OverallScore.jsx` | `executiveSummary.verdict` | label, score, title, description |
| `ExecutiveSummary.jsx` | `executiveSummary.kpis` | label, value, sub, badge |
| `RevenueAnalysis.jsx` | `revenueAnalysis` | plData, alert |
| `FinancialRatios.jsx` | `financialRatios` | All 4 ratio categories |
| `BalanceSheet.jsx` | `balanceSheet` | assets, liabilities |
| `ExpenseAnalysis.jsx` | `expenseAnalysis` | expenses, rptTransactions |
| `CriticalFlaws.jsx` | `criticalFlaws.criticalFlaws` | type, icon, title, description |
| `FinancialScorecard.jsx` | `scorecard` | scores, weightedScores |
| `StrategicAdvisory.jsx` | `strategicAdvisory.recommendations` | priority, title, actions |
| `ActionPlan.jsx` | `actionPlan.phases` | period, focus, description |
| `Conclusion.jsx` | `conclusion.summaryMetrics` | name, fy22-25, trend |

---

## File Export

The data is exported as a single default object:

```javascript
const financialData = {
  cover: { ... },
  executiveSummary: { ... },
  revenueAnalysis: { ... },
  financialRatios: { ... },
  balanceSheet: { ... },
  expenseAnalysis: { ... },
  criticalFlaws: { ... },
  scorecard: { ... },
  strategicAdvisory: { ... },
  actionPlan: { ... },
  conclusion: { ... }
};

export default financialData;
```

---

## Quick Stats

- **Total Sections:** 11
- **Total Arrays:** 24
- **Total Data Points:** ~500+
- **File Size:** 440 lines
- **Components Using Data:** 12 main + 4 UI components
- **CSS Classes Referenced:** 30+

---

## Maintenance Notes

### Adding New Data

1. **New KPI:** Add to `executiveSummary.kpis` array
2. **New Ratio:** Add to appropriate category in `financialRatios`
3. **New Flaw:** Add to `criticalFlaws.criticalFlaws` with type/icon/title/description
4. **New Recommendation:** Add to `strategicAdvisory.recommendations` with priority/actions
5. **New Timeline Phase:** Add to `actionPlan.phases` with period/dotColor

### Styling Consistency

- Always use predefined color classes (`text-red`, `text-green`, etc.)
- Use `highlight: true` for important rows across all sections
- Maintain emoji consistency: 🔴 (critical), 🟠 (high), 🔵 (medium), 🟢 (success)
- Keep currency values as strings with commas for readability

---

## Last Updated

February 14, 2026
