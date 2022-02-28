package org.entando.entandoqebundle01;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("org.entando.entandoqebundle01");

        noClasses()
            .that()
            .resideInAnyPackage("org.entando.entandoqebundle01.service..")
            .or()
            .resideInAnyPackage("org.entando.entandoqebundle01.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..org.entando.entandoqebundle01.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
