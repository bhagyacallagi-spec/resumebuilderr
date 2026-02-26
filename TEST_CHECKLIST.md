# AI Resume Builder - Test Checklist

## Step 8: ATS Resume Scoring System

### ✅ Core Functionality Tests

- [ ] **All form sections save to localStorage**
  - Fill in personal info, summary, experience, education, projects, skills
  - Refresh page
  - Verify all data persists

- [ ] **Live preview updates in real-time**
  - Type in any form field
  - Verify preview updates immediately
  - No refresh required

- [ ] **Template switching preserves data**
  - Fill in resume data
  - Switch between Classic/Modern/Minimal templates
  - Verify all content remains intact

- [ ] **Color theme persists after refresh**
  - Select a color theme
  - Refresh page
  - Verify selected color is restored

- [ ] **ATS score calculates correctly**
  - Add name (+10)
  - Add email (+10)  
  - Add summary > 50 chars (+10)
  - Add experience with description (+15)
  - Add education (+10)
  - Add 5+ skills (+10)
  - Add project (+10)
  - Add phone (+5)
  - Add LinkedIn (+5)
  - Add GitHub (+5)
  - Add action verbs to summary (+10)
  - Verify total score reaches 100

- [ ] **Score updates live on edit**
  - Add/remove fields
  - Verify score changes immediately
  - Verify improvement suggestions update

- [ ] **Export buttons work (copy/download)**
  - Click "Copy as Text" - verify clipboard content
  - Click "Print / Save PDF" - verify toast appears
  - Test in different browsers

- [ ] **Empty states handled gracefully**
  - Visit builder with no data
  - Verify placeholder text in preview
  - Verify helpful suggestions shown

- [ ] **Mobile responsive layout works**
  - Test on mobile viewport
  - Verify all components resize appropriately
  - Verify touch targets are large enough

- [ ] **No console errors on any page**
  - Open browser dev tools
  - Navigate all pages
  - Verify no errors or warnings

### ✅ Visual Tests

- [ ] **Score display shows correct color coding**
  - 0-40: Red "Needs Work"
  - 41-70: Amber "Getting There"  
  - 71-100: Green "Strong Resume"

- [ ] **Circular progress meter animates smoothly**
  - Watch score change from 0 to 100
  - Verify smooth transition animation

- [ ] **Improvement suggestions are relevant**
  - Remove name - verify "Add your name" suggestion
  - Remove email - verify "Add email" suggestion
  - Add fields - verify suggestions disappear

### ✅ Scoring Logic Verification

| Requirement | Points | Test |
|-------------|--------|------|
| Name provided | 10 | ✅ |
| Email provided | 10 | ✅ |
| Summary > 50 chars | 10 | ✅ |
| Experience with bullets | 15 | ✅ |
| Education entry | 10 | ✅ |
| 5+ skills | 10 | ✅ |
| 1+ project | 10 | ✅ |
| Phone provided | 5 | ✅ |
| LinkedIn provided | 5 | ✅ |
| GitHub provided | 5 | ✅ |
| Summary action verbs | 10 | ✅ |
| **Total** | **100** | ✅ |

### ✅ User Experience Tests

- [ ] **Score provides clear feedback**
  - Understandable status labels
  - Helpful improvement suggestions
  - Clear point values shown

- [ ] **Template selection is intuitive**
  - Visual thumbnails are clear
  - Active template is clearly indicated
  - Layout changes are immediate

- [ ] **Color customization is obvious**
  - Color circles are visible
  - Active color is highlighted
  - Accent changes are noticeable

---

**Test Status:** ⏳ In Progress  
**Last Updated:** February 26, 2026
