package org.entando.entandoqebundle01;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.entando.entandoqebundle01.EntandoQeBundle01App;
import org.entando.entandoqebundle01.config.TestSecurityConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { EntandoQeBundle01App.class, TestSecurityConfiguration.class })
public @interface IntegrationTest {
}
