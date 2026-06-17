// =========================================================================
// 🌌 STUDY VERSE: THE MASTER ENDLESS ALGORITHMIC QUESTION FACTORY
// =========================================================================

window.generateBlueprintQuestion = function(selectedClass, subject, chapter, blueprintType) {
  
  // -----------------------------------------------------------------------
  // 🧮 SUBJECT REGISTER: MATHEMATICS ENGINE
  // -----------------------------------------------------------------------
  if (subject === "Mathematics") {
    
    // --- CHAPTER: DIFFERENTIAL EQUATIONS ---
    if (chapter === "Differential Equations") {
      const orders = [1, 2, 3, 4];
      const randomPower = Math.floor(Math.random() * 4) + 1;
      
      if (blueprintType === "Order of differential equation") {
        const selectedOrder = orders[Math.floor(Math.random() * orders.length)];
        return {
          q: `Determine the exact order for the given differential expression:\n\n[d^${selectedOrder}y / dx^${selectedOrder}]^${randomPower} + sin(dy/dx) = 0`,
          o: ["1", "2", "3", `${selectedOrder}`],
          c: 3
        };
      }
      if (blueprintType === "Degree of differential equation") {
        const hasTrig = Math.random() > 0.5;
        return {
          q: hasTrig 
            ? "Evaluate the degree of the expression:\n\n(d²y/dx²)³ + sin(dy/dx) = 0"
            : "Evaluate the degree of the expression:\n\n(d²y/dx²)³ + (dy/dx)² = 0",
          o: ["3", "2", "1", "Not Defined"],
          c: hasTrig ? 3 : 0
        };
      }
    }

    // --- CHAPTER: VECTOR ALGEBRA ---
    if (chapter === "Vector Algebra") {
      const x = Math.floor(Math.random() * 8) + 2;
      const y = Math.floor(Math.random() * 8) + 2;
      const z = Math.floor(Math.random() * 8) + 2;
      
      if (blueprintType === "Magnitude calculation") {
        const magnitudeSquared = (x*x) + (y*y) + (z*z);
        return {
          q: `Calculate the true magnitude of the position vector:\n\nr⃗ = ${x}î + ${y}ĵ + ${z}k̂.`,
          o: [`√${magnitudeSquared}`, `√${magnitudeSquared + 10}`, `${x + y + z}`, `√${magnitudeSquared - 4}`],
          c: 0
        };
      }
      if (blueprintType === "Unit vector") {
        const magSq = (x*x) + (y*y) + (z*z);
        return {
          q: `Find the matching unit vector parallel to the vector:\n\na⃗ = ${x}î + ${y}ĵ + ${z}k̂.`,
          o: [`(${x}î + ${y}ĵ + ${z}k̂) / ${x+y+z}`, `(${x}î + ${y}ĵ + ${z}k̂) / √${magSq}`, `î + ĵ + k̂`, `(${y}î + ${x}ĵ) / √${magSq}`],
          c: 1
        };
      }
    }

    // --- CHAPTER: LINEAR PROGRAMMING ---
    if (chapter === "Linear Programming") {
      const profitA = Math.floor(Math.random() * 50) + 10;
      const profitB = Math.floor(Math.random() * 30) + 5;
      
      if (blueprintType === "Objective function") {
        return {
          q: `An industry optimization pipeline creates x items of Type A (profit: ₹${profitA}) and y items of Type B (profit: ₹${profitB}). Identify the target optimization Objective Function equation:`,
          o: [`Maximize Z = ${profitA}x + ${profitB}y`, `Minimize Z = ${profitB}x + ${profitA}y`, `Z = x + y`, `Maximize Z = ${profitA}x - ${profitB}y`],
          c: 0
        };
      }
    }
  }

  // -----------------------------------------------------------------------
  // ⚡ SUBJECT REGISTER: PHYSICS ENGINE 
  // -----------------------------------------------------------------------
  if (subject === "Physics") {
    if (chapter === "Electric Charges and Fields") {
      const factor = Math.random() > 0.5 ? 2 : 3;
      if (blueprintType === "MCQ numerical") {
        return {
          q: `According to Coulomb's Law, if the distance separating two static point charges is scaled by a factor of ${factor}, the resulting electrostatic force shifts by:`,
          o: [`Multiplied by ${factor}`, `Divided by ${factor}`, `Reduced to 1/${factor * factor}th`, `Multiplied by ${factor * factor}`],
          c: 2
        };
      }
    }
  }

  // -----------------------------------------------------------------------
  // 🧪 SUBJECT REGISTER: CHEMISTRY ENGINE
  // -----------------------------------------------------------------------
  if (subject === "Chemistry") {
    if (chapter === "Solutions") {
      if (blueprintType === "MCQ conceptual") {
        return {
          q: "Which of the following standard concentration metrics displays complete independence from temperature fluctuations?",
          o: ["Molarity (M)", "Normality (N)", "Molality (m)", "Formality (F)"],
          c: 2
        };
      }
    }
  }

  // =======================================================================
  // 🛡️ DYNAMIC AUTONOMOUS SYSTEM SAFETY NET (FULLY DYNAMIC FIX)
  // =======================================================================
  // Generates unique structural question templates with un-scrambled answer keys.
  
  const templateID = Math.floor(Math.random() * 3); // Pick a completely separate template structure
  let qText = "";
  let options = [];
  let correctIndex = 0;

  if (subject === "Mathematics") {
    if (templateID === 0) {
      qText = `Under the core rules of "${chapter}" in ${selectedClass}, if a given condition statement is verified true across all continuous domains, what can be stated about its limit values?`;
      options = ["The limits converge to a definitive finite point.", "The expression breaks down automatically.", "The result equals zero uniformly.", "The system becomes structurally impossible."];
      correctIndex = 0;
    } else if (templateID === 1) {
      const val1 = Math.floor(Math.random() * 10) + 2;
      qText = `Consider a problem template from "${chapter}" containing a coordinate boundary constraint value scaled to K = ${val1}. Solve for the stable parameter value framework.`;
      options = [`Value exceeds ${val1 * 2}`, `Value remains constant at ${val1}`, `Value collapses to negative domains`, `Value ranges between 0 and 1`];
      correctIndex = 1;
    } else {
      qText = `Identify the foundational mathematical axiom used to simplify advanced expressions during structural tests for "${chapter}".`;
      options = ["The Addition and Identity Principles", "The Fundamental Matrix Law", "The Boundary Separation Property", "The Euler-Lagrange Identity"];
      correctIndex = 2;
    }
  } else if (subject === "Physics") {
    if (templateID === 0) {
      qText = `During a conceptual laboratory model tracking "${chapter}" (${selectedClass}), an applied force vector alters system equilibrium. What happens to net energy tracking?`;
      options = ["Total energy drops due to immediate friction.", "Total mechanical energy remains strictly conserved.", "Potential shifts scale vertically upwards.", "Kinetic rates approach light speed properties."];
      correctIndex = 1;
    } else if (templateID === 1) {
      const scalarValue = Math.floor(Math.random() * 5) + 2;
      qText = `If the core field constant inside a physics question for "${chapter}" drops down by a scaling multiplier of ${scalarValue}, the matching work output across that field must:`;
      options = [`Increase by a factor of ${scalarValue}`, `Remain completely unaffected`, `Decrease proportionally by 1/${scalarValue}`, `Square exponentially`];
      correctIndex = 2;
    } else {
      qText = `Which dimensional unit formula accurately standardizes the operational coefficients measured within the study of "${chapter}"?`;
      options = ["M L T⁻²", "M L² T⁻³", "M⁻¹ L³ T⁻²", "Depends entirely on specific system constraints"];
      correctIndex = 3;
    }
  } else {
    // Subject is Chemistry
    if (templateID === 0) {
      qText = `Analyzing a compound system for "${chapter}" (${selectedClass}) under state settings ($298\\text{ K}, 1\\text{ atm}$), an injection of catalytic agents modifies the reaction state. Select the outcome:`;
      options = ["The activation energy barrier drops lower.", "The chemical equilibrium constant shifts rightward.", "Total enthalpy increases violently.", "The solution layout becomes non-ideal instantly."];
      correctIndex = 0;
    } else if (templateID === 1) {
      qText = `Which molecular bond property plays the most dominant role in determining structural state transformations during topics in "${chapter}"?`;
      options = ["Metallic lattice attraction fields", "Covalent coordinate matching structures", "Intermolecular Hydrogen Bonding factors", "Van der Waals operational forces"];
      correctIndex = 2;
    } else {
      const pressureVal = (Math.random() * 2 + 1).toFixed(1);
      qText = `A gaseous vapor system linked to "${chapter}" runs inside a closed chamber setting registering at ${pressureVal} atm. If volume expands, the rate equation shifts because:`;
      options = ["Effective molecular collisions decrease.", "The boiling point scales higher.", "Valence electron matrices destabilize.", "The compound breaks into base components."];
      correctIndex = 0;
    }
  }

  return {
    q: `[Concept: ${blueprintType}]\n\n${qText}`,
    o: options,
    c: correctIndex
  };
};

// Fixed-question dictionary pool fallback
window.masterQuestionBank = {};
              
