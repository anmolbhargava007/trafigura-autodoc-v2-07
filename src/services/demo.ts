const mockResults = [
  {
    query: "contracts between traf and msc",
    answer: [
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "trafigura", "singapore", "msc"],
        content: [
          {
            Document_Summary: "Invoice between Traf and MSC",
            Content:
              "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["oil", "contract", "trafigura", "draft"],
        content: [
          {
            Document_Summary: "Draft oil sale agreement",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05",
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query: "contract between 23/10/2023 and 5/12/2023",
    answer: [
      {
        id: "doc-006",
        title: "Invoice - Trafigura VR22260",
        pdf_file: "Trafigura VR#VR22260 10-20-23.pdf",
        date: "2023-12-05",
        size: "3.0MB",
        author: "Trafigura",
        tags: ["invoice", "trafigura", "december", "vr22260"],
        content: [
          {
            Document_Summary: "Invoice dated 5/12/2023 for Trafigura VR22260",
            Content:
              "INVOICE VR22260\nINVOICE DATE: 5/12/2023\nTRAFIGURA VR# VR22260...",
            Date_Information: {
              Created: "2023-12-05",
              Modified: "2023-12-06",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$70M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
      {
        id: "doc-007",
        title: "Invoice - INV178631",
        pdf_file: "Invoice_INV178631_1697739461140.pdf",
        date: "2023-10-18",
        size: "2.9MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary:
              "Billing details for Trafigura Trading - INV178631",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-02",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.9MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$75M",
          Ownership_structure: "50% / 50%",
        },
      },
    ],
  },
  {
    query:
      "Show me all invoices involving Trafigura PTE LTD with shipping from Malaysia",
    answer: [
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "malaysia", "shipping"],
        content: [
          {
            Document_Summary: "Invoice showing shipping from Malaysia",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "shipping"],
        content: [
          {
            Document_Summary: "Invoice with shipment from Malaysia",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Logistics",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "msc"],
        content: [
          {
            Document_Summary:
              "Invoice between Traf and MSC with shipment details",
            Content:
              "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["contract", "malaysia", "oil", "trafigura"],
        content: [
          {
            Document_Summary: "Draft crude oil sale agreement from ONGC",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05",
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%",
        },
      },
      {
        id: "doc-008",
        title: "Invoice - Trafigura VR22289",
        pdf_file: "Trafigura VR#22289 10-20-23.pdf",
        date: "2023-10-20",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoice", "malaysia", "trafigura", "vr22289"],
        content: [
          {
            Document_Summary: "Invoice from Malaysia VR22289",
            Content:
              "INVOICE VR22289\nINVOICE DATE: 10/20/2023\nTRAFIGURA VR# VR22289...",
            Date_Information: {
              Created: "2023-10-20",
              Modified: "2023-10-21",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$60M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query:
      "Filter for invoices issued in October 2023 with due dates in November",
    answer: [
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "october", "november due", "trafigura", "msc"],
        content: [
          {
            Document_Summary:
              "Invoice issued on 23/10/2023 with due date 22/11/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170\n10 COLLYER QUAY, #29-01/05, OCEAN F \nInvoice date\n23/10/2023\n049315 SINGAPORE\nDue date\n22/11/2023",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "october", "november due", "trafigura"],
        content: [
          {
            Document_Summary:
              "Invoice issued on 23/10/2023 with due date 22/11/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171\n10 COLLYER QUAY, #29-01/05, OCEAN F \nInvoice date\n23/10/2023\n049315 SINGAPORE\nDue date\n22/11/2023",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-008",
        title: "Invoice - Trafigura VR22289",
        pdf_file: "Trafigura VR#22289 10-20-23.pdf",
        date: "2023-10-20",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoice", "october", "november due", "trafigura"],
        content: [
          {
            Document_Summary:
              "Invoice VR22289 issued in October, due in November",
            Content:
              "INVOICE\nVR22289\nINVOICE DATE:\n10/20/2023\nTRAFIGURA VR#\nVR22289\nRELEASE CONTACT Kane Altwasser\nTOTAL DUE:\nMumbaiServicePayment@trafigura.com",
            Date_Information: {
              Created: "2023-10-20",
              Modified: "2023-10-21",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$60M",
          Ownership_structure: "55% / 45%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "october", "houston", "november due"],
        content: [
          {
            Document_Summary: "Invoice issued in October, payment due November",
            Content:
              "INVOICE \n1 of 2\nBill To:\nTrafigura Trading LLC\n845 Texas Ave\nSuite 3600\nHouston TX 77002\nRemit Payment To:\n150 West Main Street, Suite 1600\nNorfolk, VA",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query: "show me all invoices from Counterparty MSC for 2024",
    answer: [
      {
        id: "doc-001",
        title: "Invoices from Counterparty MSC for 2024",
        pdf_file: "Invoices_Counterparty_MSC_2024.pdf",
        date: "2024-12-31",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoices", "Counterparty MSC", "2024"],
        content: [
          {
            Document_Summary:
              "List of all invoices from Counterparty MSC for the year 2024.",
            Content:
              "The following are the invoices from Counterparty MSC for the year 2024:\n\n1. Invoice #INV001: Date: 2024-01-15, Amount: $10,000\n\n2. Invoice #INV002: Date: 2024-02-20, Amount: $15,000\n\n3. Invoice #INV003: Date: 2024-03-10, Amount: $12,000\n\n4. Invoice #INV004: Date: 2024-04-05, Amount: $20,000\n\n5. Invoice #INV005: Date: 2024-05-18, Amount: $18,000",
            Date_Information: {
              Created: "2024-12-31",
              Modified: "2024-12-31",
            },
            Document_Details: {
              Type: "Invoice Report",
              Department: "Finance",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Invoices: 5,
          Total_Amount: "$75,000",
          Highest_Amount: "$20,000",
        },
      },
    ],
  },
  {
    query: "Summarise the total spend for Q4 2024",
    answer: [
      {
        id: "doc-002",
        title: "Total Spend for Q4 2024",
        pdf_file: "Total_Spend_Q4_2024.pdf",
        date: "2024-12-31",
        size: "2.5MB",
        author: "Trafigura",
        tags: ["total spend", "Q4 2024"],
        content: [
          {
            Document_Summary: "Summary of the total spend for Q4 2024.",
            Content:
              "The total spend for Q4 2024 is as follows:\n\n- October: $25,000\n- November: $30,000\n- December: $35,000\n\nTotal Spend for Q4 2024: $90,000",
            Date_Information: {
              Created: "2024-12-31",
              Modified: "2024-12-31",
            },
            Document_Details: {
              Type: "Spend Summary Report",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Spend: "$90,000",
          Highest_Monthly_Spend: "$35,000 (December)",
          Lowest_Monthly_Spend: "$25,000 (October)",
        },
      },
    ],
  },
  {
    query: "Show a breakdown by cost line",
    answer: [
      {
        id: "doc-003",
        title: "Breakdown by Cost Line for 2024",
        pdf_file: "Breakdown_Cost_Line_2024.pdf",
        date: "2024-12-31",
        size: "2.8MB",
        author: "Trafigura",
        tags: ["breakdown", "cost line", "2024"],
        content: [
          {
            Document_Summary:
              "Breakdown of costs by cost line for the year 2024.",
            Content:
              "The breakdown of costs by cost line for the year 2024 is as follows:\n\n1. **Transportation**: $30,000\n2. **Storage**: $20,000\n3. **Handling**: $15,000\n4. **Insurance**: $10,000\n\nTotal Costs: $75,000",
            Date_Information: {
              Created: "2024-12-31",
              Modified: "2024-12-31",
            },
            Document_Details: {
              Type: "Cost Breakdown Report",
              Department: "Finance",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Costs: "$75,000",
          Highest_Cost_Line: "Transportation ($30,000)",
          Lowest_Cost_Line: "Insurance ($10,000)",
        },
      },
    ],
  },
  {
    query:
      "Provide me with a copy of the final DA for Vessel Pacific Dawn, Vessel 2075, at Port Singapore",
    answer: [
      {
        id: "doc-001",
        title: "Final DA for Vessel Pacific Dawn, Voyage 2075, at Port Singapore",
        pdf_file: "Final_DA.pdf",
        date: "2025-05-13",
        size: "2.2MB",
        author: "Port Agency",
        tags: ["final DA", "vessel pacific dawn", "voyage 2075", "port singapore"],
        content: [
          {
            Document_Summary:
              "Final disbursement account for Vessel Pacific Dawn, Voyage 2075 at Port Singapore.",
            Content:
              "FINAL DA\nVessel: A\nVoyage: B\nPort: C\n\nDetails:\n- Port Singaporeharges: $50,000\n- Pilotage: $10,000\n- Towage: $15,000\n- Bunkers: $20,000\n- Other Expenses: $5,000\n\nTotal: $100,000",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Port Disbursement Account",
              Department: "Marine Ops",
              Size: "2.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Disbursement: "$100,000",
          Highest_Expense: "Bunkers ($20,000)",
          Lowest_Expense: "Other Expenses ($5,000)",
        },
      },
    ],
  },
  {
    query: "What was the variance from the proforma DA?",
    answer: [
      {
        id: "doc-002",
        title: "Variance from Proforma DA for Vessel Pacific Dawn, Vessel 2075, at Port Singapore",
        pdf_file: "Variance_Proforma_DA_Vessel_A_Voyage_B_Port_C.pdf",
        date: "2025-05-13",
        size: "1.8MB",
        author: "Port Agency",
        tags: ["variance", "proforma DA", "vessel pacific dawn", "voyage 2075", "port singapore"],
        content: [
          {
            Document_Summary:
              "Variance from the proforma DA for Vessel Pacific Dawn, Voyage 2075 at Port Singapore.",
            Content:
              "VARIANCE FROM PROFORMA DA\nVessel: A\nVoyage: B\nPort: C\n\nDetails:\n- Port Singaporeharges: $50,000 (Proforma: $45,000, Variance: $5,000)\n- Pilotage: $10,000 (Proforma: $12,000, Variance: -$2,000)\n- Towage: $15,000 (Proforma: $14,000, Variance: $1,000)\n- Bunkers: $20,000 (Proforma: $18,000, Variance: $2,000)\n- Other Expenses: $5,000 (Proforma: $6,000, Variance: -$1,000)\n\nTotal Variance: $5,000",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Variance Report",
              Department: "Marine Ops",
              Size: "1.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Variance: "$5,000",
          Highest_Positive_Variance: "Bunkers ($2,000)",
          Highest_Negative_Variance: "Pilotage (-$2,000)",
        },
      },
    ],
  },
  {
    query: "When was the final DA paid or refunded?",
    answer: [
      {
        id: "doc-003",
        title: "Final DA Payment/Refund for Vessel Pacific Dawn, Vessel 2075, at Port Singapore",
        pdf_file: "Final_DA_Payment_Refund_Vessel_A_Voyage_B_Port_C.pdf",
        date: "2025-05-13",
        size: "1.5MB",
        author: "Port Agency C",
        tags: [
          "final DA",
          "payment",
          "refund",
          "vessel pacific dawn",
          "voyage 2075",
          "port singapore",
        ],
        content: [
          {
            Document_Summary:
              "Final DA payment/refund details for Vessel Pacific Dawn, Voyage 2075 at Port Singapore.",
            Content:
              "FINAL DA PAYMENT/REFUND\nVessel: A\nVoyage: B\nPort: C\n\nDetails:\n- Payment Date: 2025-05-10\n- Refund Date: N/A\n- Amount Paid: $100,000\n- Amount Refunded: $0\n\nStatus: Paid",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Payment/Refund Report",
              Department: "Marine Ops",
              Size: "1.5MB",
            },
          },
        ],
        Calculated_Values: {
          Payment_Date: "2025-05-10",
          Refund_Date: "N/A",
          Amount_Paid: "$100,000",
          Amount_Refunded: "$0",
          Status: "Paid",
        },
      },
    ],
  },
  {
    query: "What contracts are due to expire in the next 3 months?",
    answer: [
      {
        id: "doc-001",
        title: "IT Service Contracts Expiring in Next 3 Months",
        pdf_file: "IT_Service_Contracts_Expiring_Next_3_Months.pdf",
        date: "2025-05-13",
        size: "2.8MB",
        author: "KR Group",
        tags: ["IT services", "contracts", "expiring", "next 3 months"],
        content: [
          {
            Document_Summary:
              "List of IT service contracts expiring in the next 3 months.",
            Content:
              "The following IT service contracts are due to expire in the next 3 months:\n\n1. **Contract with TRAF Corp**: Expiring on 2025-08-15, Value: $1.2M\n\n2. **Contract with MSC Ltd**: Expiring on 2025-08-20, Value: $1.5M\n\n3. **Contract with DEF Inc**: Expiring on 2025-09-05, Value: $2.0M\n\n4. **Contract with GHI Co**: Expiring on 2025-09-10, Value: $1.8M\n\n5. **Contract with JKL Enterprises**: Expiring on 2025-09-25, Value: $2.5M",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Contract Expiry Report",
              Department: "Contract Management",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts_Expiring: 5,
          Total_Value: "$9.0M",
          Highest_Value_Contract: "$2.5M",
        },
      },
    ],
  },
  {
    query: "Filter to contracts over $1M USD, sorted by value descending",
    answer: [
      {
        id: "doc-002",
        title: "IT Service Contracts Over $1M USD",
        pdf_file: "IT_Service_Contracts_Over_1M_USD.pdf",
        date: "2025-05-13",
        size: "2.5MB",
        author: "KR Group",
        tags: ["IT services", "contracts", "over $1M", "sorted by value"],
        content: [
          {
            Document_Summary:
              "List of IT service contracts over $1M USD, sorted by value descending.",
            Content:
              "The following IT service contracts are over $1M USD and sorted by value descending:\n\n1. **Contract with JKL Enterprises**: Value: $2.5M, Expiring on 2025-09-25\n\n2. **Contract with DEF Inc**: Value: $2.0M, Expiring on 2025-09-05\n\n3. **Contract with GHI Co**: Value: $1.8M, Expiring on 2025-09-10\n\n4. **Contract with MSC Ltd**: Value: $1.5M, Expiring on 2025-08-20\n\n5. **Contract with TRAF Corp**: Value: $1.2M, Expiring on 2025-08-15",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Contract Value Report",
              Department: "Contract Management",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts: 5,
          Total_Value: "$9.0M",
          Highest_Value_Contract: "$2.5M",
        },
      },
    ],
  },
  {
    query: "Provide copies of all relevant contracts",
    answer: [
      {
        id: "doc-003",
        title: "Copies of Relevant IT Service Contracts",
        pdf_file: "Copies_Relevant_IT_Service_Contracts.pdf",
        date: "2025-05-13",
        size: "3.0MB",
        author: "KR Group",
        tags: ["IT services", "contracts", "copies", "relevant"],
        content: [
          {
            Document_Summary: "Copies of all relevant IT service contracts.",
            Content:
              "The following are the copies of all relevant IT service contracts:\n\n1. **Contract with TRAF Corp**: Expiring on 2025-08-15, Value: $1.2M\n\n2. **Contract with MSC Ltd**: Expiring on 2025-08-20, Value: $1.5M\n\n3. **Contract with DEF Inc**: Expiring on 2025-09-05, Value: $2.0M\n\n4. **Contract with GHI Co**: Expiring on 2025-09-10, Value: $1.8M\n\n5. **Contract with JKL Enterprises**: Expiring on 2025-09-25, Value: $2.5M",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Contract Copies Report",
              Department: "Contract Management",
              Size: "3.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts: 5,
          Total_Value: "$9.0M",
          Highest_Value_Contract: "$2.5M",
        },
      },
    ],
  },
  {
    query:
      "Summarise the pricing terms used over the past 3 years for Counterparty MSC",
    answer: [
      {
        id: "doc-010",
        title: "Pricing Terms Summary - Counterparty MSC (2022–2024)",
        pdf_file: "MSC_Pricing_Terms_2022_2024.pdf",
        date: "2025-05-13",
        size: "2.8MB",
        author: "Commercial Risk & Pricing Team",
        tags: [
          "pricing",
          "terms",
          "MSC",
          "contract history",
          "2022",
          "2023",
          "2024",
        ],
        content: [
          {
            Document_Summary:
              "Three-year historical summary of commercial pricing terms for contracts executed with Counterparty MSC.",
            Content:
              "**Counterparty:** MSC Limited\n**Period Covered:** 2022 – 2024\n\n### 2022:\n- **Pricing Model:** Fixed + Premium\n- **Reference Index:** LME (monthly average)\n- **Payment Terms:** Net 30\n- **Adjustments:** Freight & impurity deductions\n- **Notes:** Early termination clause applied to 2 out of 12 contracts\n\n### 2023:\n- **Pricing Model:** Floating (LME average - 5 day window pre-shipment)\n- **Reference Index:** LME & Fastmarkets blend\n- **Payment Terms:** Net 15 to Net 45 (varied by delivery port)\n- **Adjustments:** Quality premiums linked to Cu content > 25%\n- **Notes:** Inclusion of price review clause triggered in Q4\n\n### 2024:\n- **Pricing Model:** Hybrid (Floor + Indexed Floating)\n- **Reference Index:** LME Monthly Average + Market Premium (Argus)\n- **Payment Terms:** Net 30 with LC backup\n- **Adjustments:** Moisture penalty > 8%, incentive rebates on early discharge\n- **Notes:** Use of provisional pricing at loading, final on assay\n\nContracts over the 3-year period increased in complexity, incorporating market-linked adjustments and dynamic settlement terms.",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Pricing Summary Report",
              Department: "Commercial Contracts",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts_MSC: 39,
          Dominant_Pricing_Model: "Indexed Floating",
          Common_Index: "LME",
          Average_Payment_Term: "Net 30",
        },
      },
    ],
  },
  {
    query: "Filter to copper contracts",
    answer: [
      {
        id: "doc-011",
        title: "Copper Contract Pricing Summary - Counterparty MSC (2022–2024)",
        pdf_file: "MSC_Copper_Pricing_2022_2024.pdf",
        date: "2025-05-13",
        size: "2.1MB",
        author: "Commercial Risk & Pricing Team",
        tags: [
          "copper",
          "pricing",
          "MSC",
          "contracts",
          "LME",
          "2022",
          "2023",
          "2024",
        ],
        content: [
          {
            Document_Summary:
              "Filtered summary of copper concentrate contract pricing terms for Counterparty MSC over the past 3 years.",
            Content:
              "**Commodity:** Copper Concentrates\n**Counterparty:** MSC Limited\n**Period Covered:** 2022 – 2024\n\n### 2022:\n- **Contracts:** 5\n- **Pricing Terms:** Fixed base (LME 3-month average) + $80/dmt premium\n- **Treatment Charges (TC):** $65/dmt\n- **Payment:** Net 30\n- **Adjustments:** Penalty for As > 0.5%, incentive for early discharge\n\n### 2023:\n- **Contracts:** 6\n- **Pricing Terms:** LME monthly average - 5-day backward window\n- **Treatment Charges (TC):** $72/dmt\n- **Refining Charges (RC):** $0.08/lb\n- **Payment:** Net 45 (letter of credit supported)\n- **Adjustments:** Linked to Cu grade > 24%, impurity bands for Pb, Zn\n\n### 2024:\n- **Contracts:** 7\n- **Pricing Terms:** Floating with floor (LME monthly avg, floor at $8,200/MT)\n- **TC/RC:** $80/dmt / $0.09/lb\n- **Payment:** Net 30 with LC confirmation\n- **Adjustments:** Final settlement based on CIQ assays; provisional pricing applied\n\nThe trend shows a shift from fixed pricing to dynamic, index-linked structures with increasing reliance on quality and timing incentives.",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Filtered Pricing Report",
              Department: "Metals & Concentrates",
              Size: "2.1MB",
            },
          },
        ],
        Calculated_Values: {
          Copper_Contracts_Count: 18,
          Most_Used_Index: "LME Monthly Average",
          Avg_Treatment_Charge: "$72/dmt",
          Avg_Refining_Charge: "$0.085/lb",
        },
      },
    ],
  },
  {
    query: "refined contracts",
    answer: [
      {
        id: "doc-012",
        title: "Refined Copper Contracts - Counterparty MSC (2022–2024)",
        pdf_file: "MSC_Refined_Copper_Contracts_2022_2024.pdf",
        date: "2025-05-13",
        size: "2.3MB",
        author: "Commercial Risk & Pricing Team",
        tags: [
          "refined copper",
          "cathode",
          "contracts",
          "MSC",
          "pricing",
          "LME",
        ],
        content: [
          {
            Document_Summary:
              "Summary of refined copper (cathode) sales and purchase contracts with Counterparty MSC over the last 3 years.",
            Content:
              "**Commodity:** Refined Copper (Grade A Cathodes)\n**Counterparty:** MSC Limited\n**Period:** 2022 – 2024\n\n### 2022:\n- **Contracts:** 4\n- **Pricing:** LME 3M Average + $85/MT premium (CIF Shanghai)\n- **Volume:** 18,000 MT total\n- **Payment Terms:** Net 15, TT in advance\n- **Notes:** All contracts included Shanghai bonded warehouse delivery\n\n### 2023:\n- **Contracts:** 5\n- **Pricing:** LME cash settlement + negotiated premium ($95–$105/MT)\n- **Volume:** 20,500 MT total\n- **Payment Terms:** Net 30 via LC\n- **Notes:** One spot contract included a retrospective price true-up clause\n\n### 2024:\n- **Contracts:** 6\n- **Pricing:** LME Monthly Average + Fastmarkets premium index (Asia basis)\n- **Volume:** 25,000 MT total\n- **Payment Terms:** Net 30, with early payment discount (1.25%)\n- **Notes:** Four contracts tied to physical delivery at Qingdao and Lianyungang\n\nConsistent evolution toward indexed pricing and flexible settlement terms is observed. MSC increasingly favored delivery into bonded warehouses with LC-backed terms.",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Refined Copper Contract Summary",
              Department: "Non-Ferrous Sales",
              Size: "2.3MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts: 15,
          Total_Refined_Copper_Volume: "63,500 MT",
          Average_Premium: "$95/MT",
          Dominant_Pricing_Index: "LME + Fastmarkets",
        },
      },
    ],
  },
  {
    query:
      "Identify all active commodity contracts affected by Trump’s new tariffs",
    answer: [
      {
        id: "doc-007",
        title: "Active Commodity Contracts Affected by 2025 Tariffs",
        pdf_file: "Commodity_Contracts_Tariff_Impact_2025.pdf",
        date: "2025-05-13",
        size: "3.5MB",
        author: "Global Trade Compliance Ltd.",
        tags: [
          "tariffs",
          "commodity contracts",
          "Trump",
          "2025",
          "trade policy",
        ],
        content: [
          {
            Document_Summary:
              "Overview of active commodity contracts impacted by the 2025 U.S. tariff changes under President Trump's administration.",
            Content:
              "This report identifies active commodity contracts as of May 2025 that are affected by the recent U.S. tariff implementations:\n\n1. **Copper Concentrates**: Contracts involving imports from countries like Chile and Peru are subject to new tariffs, impacting pricing and delivery terms.\n\n2. **Aluminum Products**: Agreements with suppliers from Canada and China are affected due to the 25% tariff on aluminum imports.\n\n3. **Steel Imports**: Contracts with European and Asian steel manufacturers face increased costs due to the reinstated 25% steel tariffs.\n\n4. **Agricultural Commodities**: Soybean and corn import singaporeontracts from Brazil and Argentina are influenced by the shifting demand resulting from tariffs on Chinese goods.\n\n5. **Crude Oil**: Import agreements from Middle Eastern countries are indirectly affected by market shifts due to energy tariffs.\n\nEach contract's terms, including pricing, delivery schedules, and force majeure clauses, are being reviewed to assess the impact of these tariff changes.",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Trade Impact Report",
              Department: "Legal & Compliance",
              Size: "3.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts_Affected: 125,
          Average_Tariff_Increase: "15%",
          Estimated_Additional_Costs: "$47.5 million",
        },
      },
    ],
  },
  {
    query: "Summarise by commodity and material origin (e.g., load port)",
    answer: [
      {
        id: "doc-008",
        title: "Commodity and Load Port Summary - Tariff Impact 2025",
        pdf_file: "Commodity_Summary_By_Origin_2025.pdf",
        date: "2025-05-13",
        size: "2.2MB",
        author: "Global Trade Compliance Ltd.",
        tags: [
          "commodity",
          "origin",
          "load port",
          "tariffs",
          "summary",
          "2025",
        ],
        content: [
          {
            Document_Summary:
              "Summary of impacted commodities and their material origin (load port) under the 2025 U.S. tariffs.",
            Content:
              "This summary outlines the key commodities affected by U.S. tariffs in 2025, along with their origin points (load ports):\n\n1. **Copper Concentrates**\n   - Origin: Antofagasta, Chile / Callao, Peru\n   - Contracts Affected: 28\n   - Tariff Rate: 10%\n\n2. **Aluminum**\n   - Origin: Kitimat, Canada / Qingdao, China\n   - Contracts Affected: 19\n   - Tariff Rate: 25%\n\n3. **Steel Products**\n   - Origin: Rotterdam, Netherlands / Busan, South Korea\n   - Contracts Affected: 34\n   - Tariff Rate: 25%\n\n4. **Soybeans**\n   - Origin: Santos, Brazil / Rosario, Argentina\n   - Contracts Affected: 22\n   - Tariff Rate: Variable (average 15%)\n\n5. **Crude Oil**\n   - Origin: Ras Tanura, Saudi Arabia / Basra, Iraq\n   - Contracts Affected: 22 (indirect pricing impact)\n   - Tariff Rate: N/A (indirect via logistics)\n",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Summary Report",
              Department: "Commercial Intelligence",
              Size: "2.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Commodities: 5,
          Top_Impacted_Origin: "Rotterdam, Netherlands",
          Highest_Tariff_Commodity: "Aluminum (25%)",
        },
      },
    ],
  },
  {
    query: "Show contract count and total value for each group",
    answer: [
      {
        id: "doc-009",
        title:
          "Contract Count and Value Summary by Commodity Group - 2025 Tariff Impact",
        pdf_file: "Contract_Count_Value_By_Group_2025.pdf",
        date: "2025-05-13",
        size: "2.6MB",
        author: "Global Trade Compliance Ltd.",
        tags: ["contracts", "summary", "value", "commodity", "tariffs", "2025"],
        content: [
          {
            Document_Summary:
              "Grouped summary of active contracts by commodity type, showing contract counts and total monetary value impacted by 2025 tariffs.",
            Content:
              "The table below presents the contract volume and associated value for each impacted commodity group:\n\n1. **Copper Concentrates**\n   - Contracts: 28\n   - Total Value: $312,500,000\n\n2. **Aluminum**\n   - Contracts: 19\n   - Total Value: $205,000,000\n\n3. **Steel Products**\n   - Contracts: 34\n   - Total Value: $389,000,000\n\n4. **Soybeans**\n   - Contracts: 22\n   - Total Value: $178,000,000\n\n5. **Crude Oil**\n   - Contracts: 22\n   - Total Value: $624,000,000 (indirect impact, market-adjusted)\n\nTotal Active Contracts: 125\nAggregate Value: $1,708,500,000",
            Date_Information: {
              Created: "2025-05-13",
              Modified: "2025-05-13",
            },
            Document_Details: {
              Type: "Financial Summary",
              Department: "Commercial Analysis",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_Contracts: 125,
          Aggregate_Contract_Value: "$1.71B",
          Highest_Value_Group: "Crude Oil",
          Largest_Contract_Group: "Steel Products",
        },
      },
    ],
  },
  {
    query:
      "Provide me with a copy of the email exchange between Traf and MSC confirming the terms of the contract",
    answer: [
      {
        id: "doc-002",
        title: "Email Exchange - Contract Confirmation between Traf and MSC",
        pdf_file: "TRAF_MSC_Contract_Confirmation_Emails.pdf",
        date: "2023-09-15",
        size: "1.8MB",
        author: "TRAF Corporation",
        tags: ["email", "contract", "confirmation", "TRAF", "MSC"],
        content: [
          {
            Document_Summary:
              "Email correspondence confirming contract terms between Traf and MSC",
            Content:
              "From: john.doe@traf.com\nTo: jane.smith@msc.com\nDate: 2023-09-13\nSubject: Contract Terms Confirmation\n\nDear Jane,\n\nPlease find attached the final version of the contract. As discussed, the effective date will be October 1, 2023, with a duration of 2 years. The payment terms are net 30 days, and both parties have agreed to the termination clause in Section 8.\n\nLooking forward to your confirmation.\n\nBest,\nJohn\n\n---\n\nFrom: jane.smith@msc.com\nTo: john.doe@traf.com\nDate: 2023-09-14\nSubject: Re: Contract Terms Confirmation\n\nHi John,\n\nThank you for sending the final draft. We confirm our agreement to the terms as outlined. Our legal team has signed off, and we look forward to executing the contract on the agreed date.\n\nRegards,\nJane",
            Date_Information: {
              Created: "2023-09-13",
              Modified: "2023-09-15",
            },
            Document_Details: {
              Type: "Email Exchange",
              Department: "Legal",
              Size: "1.8MB",
            },
          },
        ],
        Calculated_Values: {
          Effective_Date: "2023-10-01",
          Contract_Duration: "2 years",
          Payment_Terms: "Net 30 days",
        },
      },
    ],
  },
  {
    query: "Provide me with a copy of the signed contract",
    answer: [
      {
        id: "doc-003",
        title: "Signed Contract - Traf and MSC Agreement",
        pdf_file: "Signed_Contract_TRAF_MSC.pdf",
        date: "2023-09-20",
        size: "2.4MB",
        author: "MSC Limited",
        tags: ["contract", "signed", "agreement", "TRAF", "MSC", "legal"],
        content: [
          {
            Document_Summary:
              "Final signed contract agreement between TRAF Corporation and MSC Limited",
            Content:
              "This contract is made effective as of October 1, 2023, between TRAF Corporation and MSC Limited. The contract outlines the scope of services, payment terms, duration, confidentiality obligations, and termination clauses. Both parties have signed on page 12, with witness signatures and company seals affixed.\n\nKey provisions include:\n- Scope of Services (Section 2)\n- Payment Terms: Net 30 days (Section 4)\n- Duration: 2 years (Section 5)\n- Termination Rights (Section 8)\n\nSigned by:\nJohn Doe, Director, TRAF Corporation\nJane Smith, VP Legal, MSC Limited\nDate of Signing: September 20, 2023",
            Date_Information: {
              Created: "2023-09-18",
              Modified: "2023-09-20",
            },
            Document_Details: {
              Type: "Signed Contract",
              Department: "Legal",
              Size: "2.4MB",
            },
          },
        ],
        Calculated_Values: {
          Effective_Date: "2023-10-01",
          Contract_Signatories: ["John Doe (TRAF)", "Jane Smith (MSC)"],
          Contract_Duration: "2 years",
        },
      },
    ],
  },
  {
    query:
      "Search for a specific copper concentrates purchase invoice in 2025: e.g. invoice number 1234TRAF",
    answer: [
      {
        id: "doc-004",
        title: "Invoice - 1234TRAF",
        pdf_file: "CopperConcentrates_Invoice_1234TRAF.pdf",
        date: "2025-03-05",
        size: "2.9MB",
        author: "Global Metals Trading Co.",
        tags: [
          "invoice",
          "copper",
          "concentrates",
          "2025",
          "purchase",
          "1234TRAF",
        ],
        content: [
          {
            Document_Summary:
              "Copper concentrates purchase invoice issued by Global Metals Trading Co. to TRAF Corporation for Q1 2025 shipment.",
            Content:
              "Invoice No: 1234TRAF\nDate: 2025-03-05\nBuyer: TRAF Corporation\nSeller: Global Metals Trading Co.\nProduct: Copper Concentrates\nQuantity: 5,000 DMT\nUnit Price: $8,900/MT\nTotal Amount: $44,500,000\nDelivery Terms: CIF Qingdao, China\nPayment Terms: Net 30 days\nShipment Date: 2025-03-01",
            Date_Information: {
              Created: "2025-03-05",
              Modified: "2025-03-06",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Procurement",
              Size: "2.9MB",
            },
          },
        ],
        Calculated_Values: {
          Invoice_Number: "1234TRAF",
          Total_Amount: "$44,500,000",
          Shipment_Quantity: "5,000 DMT",
          Unit_Price: "$8,900/MT",
        },
      },
    ],
  },
  {
    
    query: "Is VAT applicable for this invoice?",
    answer: [
      {
        id: "doc-005",
        title: "VAT Applicability - Invoice 1234TRAF",
        pdf_file: "VAT_Details_Invoice_1234TRAF.pdf",
        date: "2025-03-06",
        size: "1.2MB",
        author: "Global Metals Trading Co.",
        tags: ["VAT", "invoice", "tax", "1234TRAF", "copper", "compliance"],
        content: [
          {
            Document_Summary:
              "VAT analysis and applicability confirmation for Invoice 1234TRAF related to copper concentrate purchase.",
            Content:
              "Reference Invoice: 1234TRAF\nDate of Issue: 2025-03-05\nBuyer: TRAF Corporation\nSeller: Global Metals Trading Co.\n\nVAT Status: Applicable\nVAT Rate: 15%\nVAT Amount: $6,675,000\n\nThis invoice qualifies for VAT under Section 12B of the Goods and Services Tax Act due to the nature of the cross-border transaction involving goods imported into China. VAT will be collected at the point of importation and handled by the buyer’s clearing agent.",
            Date_Information: {
              Created: "2025-03-06",
              Modified: "2025-03-06",
            },
            Document_Details: {
              Type: "VAT Confirmation",
              Department: "Tax",
              Size: "1.2MB",
            },
          },
        ],
        Calculated_Values: {
          VAT_Applicable: "Yes",
          VAT_Rate: "15%",
          VAT_Amount: "$6,675,000",
        },
      },
    ],
  },
  {
    query: "Is VAT claimable/refundable on this invoice?",
    answer: [
      {
        id: "doc-006",
        title: "VAT Refundability - Invoice 1234TRAF",
        pdf_file: "VAT_Refund_Eligibility_1234TRAF.pdf",
        date: "2025-03-07",
        size: "1.1MB",
        author: "TRAF Corporation",
        tags: ["VAT", "refund", "claimable", "invoice", "1234TRAF", "tax"],
        content: [
          {
            Document_Summary:
              "Assessment of VAT refund eligibility for invoice 1234TRAF related to copper concentrate purchase.",
            Content:
              "Invoice Number: 1234TRAF\nDate: 2025-03-05\nSupplier: Global Metals Trading Co.\nBuyer: TRAF Corporation\n\nVAT Applicability: Yes\nVAT Amount Charged: $6,675,000\n\nRefund Status: Claimable\n\nTRAF Corporation is registered for VAT in China and has the necessary import documentation, including the Customs VAT Payment Certificate (Form 501). As per PRC VAT law, this invoice qualifies for input VAT credit. The VAT can be claimed as a refund or set off against output VAT liabilities during the Q2 2025 reporting period.",
            Date_Information: {
              Created: "2025-03-07",
              Modified: "2025-03-07",
            },
            Document_Details: {
              Type: "Tax Memorandum",
              Department: "Finance",
              Size: "1.1MB",
            },
          },
        ],
        Calculated_Values: {
          VAT_Refundable: "Yes",
          Refund_Amount: "$6,675,000",
          Eligible_Period: "Q2 2025",
        },
      },
    ],
  },
];

export default mockResults;
